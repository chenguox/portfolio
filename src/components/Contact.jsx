const Contact = () => {
    return (
      <section id="contact" className="p-8 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center">联系我</h2>
        <form className="mt-6 max-w-lg mx-auto">
          <input type="text" placeholder="姓名" className="w-full p-3 mb-4 border border-gray-300 rounded-lg" />
          <input type="email" placeholder="邮箱" className="w-full p-3 mb-4 border border-gray-300 rounded-lg" />
          <textarea placeholder="消息" className="w-full p-3 mb-4 border border-gray-300 rounded-lg"></textarea>
          <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">发送消息</button>
        </form>
      </section>
    );
  };
  
  export default Contact;