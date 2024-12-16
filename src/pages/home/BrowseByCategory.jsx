import React from 'react';

const BrowseByCategory = () => {
  const categories = [
    { name: 'Marketing & Sale', jobs: 1526, icon: '📢' },
    { name: 'Customer Help', jobs: 185, icon: '🎧' },
    { name: 'Finance', jobs: 168, icon: '🏦' },
    { name: 'Software', jobs: 1856, icon: '💡' },
    { name: 'Human Resource', jobs: 165, icon: '👔' },
  ];

  return (
    <section className="px-4 py-8 sm:py-8 md:py-10 bg-white">
      <div className="mx-auto text-center">
        <h2 className="text-2xl font-bold md:text-3xl">Browse by category</h2>
        <p className="mt-2 text-gray-600">Find the job that’s perfect for you. About 800+ new jobs everyday</p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition cursor-pointer"
          >
            <div className="text-4xl">{category.icon}</div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">{category.name}</h3>
            <p className="mt-1 text-sm text-gray-600">{category.jobs} Jobs Available</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseByCategory;
