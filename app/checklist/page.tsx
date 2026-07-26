"use client";

import React, { useState, useEffect } from "react";
import { RefreshCw } from "lucide-react";
import { ChecklistCategory, ChecklistItem, defaultChecklistData } from "./data";

const LOCAL_STORAGE_KEY = "freshman_checklist_data";

export default function ChecklistPage() {
  const [categories, setCategories] = useState<ChecklistCategory[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [newItemNames, setNewItemNames] = useState<Record<string, string>>({});

  // Handle Hydration and LocalStorage
  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      try {
        const parsedData: ChecklistCategory[] = JSON.parse(savedData);

        // Merge parsed data with default check list to ensure new items and isMust updates reflect
        const mergedData = defaultChecklistData.map(defaultCat => {
          const savedCat = parsedData.find(c => c.id === defaultCat.id);
          if (!savedCat) return defaultCat;

          // Merge default items with saved checked state
          const mergedItems = defaultCat.items.map(defaultItem => {
            const savedItem = savedCat.items.find(i => i.id === defaultItem.id);
            if (savedItem) {
              return { ...defaultItem, checked: savedItem.checked };
            }
            return defaultItem;
          });

          // Add any custom items the user had added
          const customItems = savedCat.items.filter(i => i.isCustom);

          return {
            ...defaultCat,
            items: [...mergedItems, ...customItems]
          };
        });

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCategories(mergedData);
      } catch (e) {
        console.error("Failed to parse checklist data from localStorage", e);

        setCategories(defaultChecklistData);
      }
    } else {

      setCategories(defaultChecklistData);
    }

    setIsMounted(true);
  }, []);

  // Save to LocalStorage whenever categories change
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(categories));
    }
  }, [categories, isMounted]);

  const handleToggle = (categoryId: string, itemId: string) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            items: category.items.map((item) => {
              if (item.id === itemId) {
                return { ...item, checked: !item.checked };
              }
              return item;
            }),
          };
        }
        return category;
      })
    );
  };

  const handleAddItem = (categoryId: string) => {
    const itemName = newItemNames[categoryId]?.trim();
    if (!itemName) return;

    // Use a random string for the ID instead of Date.now() to avoid purity issues in some React setups,
    // though this is inside an event handler, React compiler might complain about it being created in render scope.
    // Actually, to be safer, we can just use crypto.randomUUID or Math.random
    const newItem: ChecklistItem = {
      // eslint-disable-next-line react-hooks/purity
      id: `custom-${Math.random().toString(36).substring(2, 9)}`,
      name: itemName,
      checked: false,
      isCustom: true,
    };

    setCategories((prevCategories) =>
      prevCategories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            items: [...category.items, newItem],
          };
        }
        return category;
      })
    );

    // Clear the input field
    setNewItemNames((prev) => ({ ...prev, [categoryId]: "" }));
  };

  const handleDeleteItem = (categoryId: string, itemId: string) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            items: category.items.filter((item) => item.id !== itemId),
          };
        }
        return category;
      })
    );
  };

  const handleReset = () => {
    if (confirm("确定要重置所有内容并恢复默认清单吗？这将会删除您添加的所有自定义物品。")) {
      setCategories(defaultChecklistData);
    }
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-gray-500">加载中...</div></div>;
  }

  // Calculate Progress
  const totalItems = categories.reduce((acc, cat) => acc + cat.items.length, 0);
  const totalChecked = categories.reduce((acc, cat) => acc + cat.items.filter((i) => i.checked).length, 0);
  const overallProgress = totalItems === 0 ? 0 : Math.round((totalChecked / totalItems) * 100);

  return (
    <div className="min-h-screen bg-gray-50/50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Header and Overall Progress Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-blue-600 tracking-tight mb-2">
                新生<span className="text-gray-900">入学物品准备清单</span>
              </h1>
              <p className="text-sm text-gray-500">
                勾选已准备好的物品，进度自动保存在本地
              </p>
            </div>

            <button
              onClick={handleReset}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-fit"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              重置
            </button>
          </div>

          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-base font-semibold text-gray-800">整体准备完成度</span>
              <span className="text-sm font-bold text-blue-600 tracking-wide">
                {totalChecked} / {totalItems} ({overallProgress}%)
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3.5 overflow-hidden">
              <div
                className="bg-blue-600 h-3.5 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${overallProgress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const categoryTotal = category.items.length;
            const categoryChecked = category.items.filter((i) => i.checked).length;
            const categoryProgress = categoryTotal === 0 ? 0 : Math.round((categoryChecked / categoryTotal) * 100);

            return (
              <div key={category.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-5 py-5 pb-3 bg-white flex justify-between items-center mb-1">
                  <h2 className="text-xl font-bold text-gray-800">{category.name}</h2>
                  <div className="flex items-center">
                    <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-600 rounded-md">
                      {categoryChecked} / {categoryTotal}
                    </span>
                  </div>
                </div>

                <div className="px-5 pb-2">
                  <div className="w-full bg-gray-100 rounded-full h-1.5 mb-4">
                    <div
                      className="bg-gray-300 h-1.5 rounded-full transition-all duration-300"
                      style={{ width: `${categoryProgress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="px-5 pb-5">
                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <li
                        key={item.id}
                        className={`p-3.5 flex items-center justify-between group transition-colors border rounded-xl ${
                          item.checked ? "bg-gray-50/50 border-gray-200" : "bg-white border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <label className="flex items-center flex-1 cursor-pointer">
                          <div className="relative flex items-center">
                            <input
                              type="checkbox"
                              checked={item.checked}
                              onChange={() => handleToggle(category.id, item.id)}
                              className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 checked:border-blue-600 checked:bg-blue-600 transition-all"
                            />
                            <svg
                              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none opacity-0 peer-checked:opacity-100 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span
                            className={`ml-3 text-sm transition-all ${
                              item.checked ? "text-gray-400" : "text-gray-700"
                            }`}
                          >
                            {item.name}
                            {item.isMust && (
                              <span className={`ml-1 text-xs font-semibold ${item.checked ? "text-red-300" : "text-red-500"}`}>
                                *必带
                              </span>
                            )}
                          </span>
                        </label>
                        {item.isCustom && (
                          <button
                            onClick={() => handleDeleteItem(category.id, item.id)}
                            className="ml-4 p-1 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
                            aria-label="删除自定义物品"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex relative rounded-md shadow-sm">
                    <input
                      type="text"
                      value={newItemNames[category.id] || ""}
                      onChange={(e) => setNewItemNames({ ...newItemNames, [category.id]: e.target.value })}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleAddItem(category.id);
                        }
                      }}
                      className="flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border border-gray-300 text-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="添加自定义物品..."
                    />
                    <button
                      type="button"
                      onClick={() => handleAddItem(category.id)}
                      disabled={!newItemNames[category.id]?.trim()}
                      className="inline-flex items-center px-4 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      添加
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
