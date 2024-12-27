const Projects = () => {
  return (
    <section id="projects" className="p-8">
      <h2 className="text-3xl font-semibold text-center">我的项目</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => {
          return (
            <div className="bg-white p-4 shadow-lg rounded-lg" key={item}>
              <img
                src="project-image.jpg"
                alt="项目图片"
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4">项目标题</h3>
              <p className="text-gray-600">简短的项目描述。</p>
            </div>
          );
        })}
        {/* 更多项目 */}
      </div>
    </section>
  );
};

export default Projects;
