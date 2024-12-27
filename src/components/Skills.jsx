const Skills = () => {
    return (
      <section id="skills" className="p-8 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center">我的技能</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <div className="text-center bg-white p-4 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">HTML</h3>
          </div>
          <div className="text-center bg-white p-4 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">CSS</h3>
          </div>
          <div className="text-center bg-white p-4 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">JavaScript</h3>
          </div>
          <div className="text-center bg-white p-4 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">React</h3>
          </div>
          {/* 可以继续添加更多技能 */}
        </div>
      </section>
    );
  };
  
  export default Skills;