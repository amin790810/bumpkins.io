import React from "react";

export const Loading: React.FC = () => {
  return (
    <section className="h-full flex-1">
      <div className="container mx-auto">
        <div className="relative p-10 md:py-10 xl:px-20 bg-white overflow-hidden rounded-3xl">
          <div className="relative z-10">
            <h2 className="mb-4 text-6xl md:text-7xl font-heading font-semibold loading">
              Loading
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
