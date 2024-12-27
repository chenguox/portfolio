const Navbar = () => {
    return (
      <nav className="bg-blue-500 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-lg">我的作品集</div>
          <div className="space-x-4">
            <a href="#about" className="text-white hover:text-gray-300">个人简介</a>
            <a href="#skills" className="text-white hover:text-gray-300">技能</a>
            <a href="#projects" className="text-white hover:text-gray-300">项目</a>
            <a href="#contact" className="text-white hover:text-gray-300">联系方式</a>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;