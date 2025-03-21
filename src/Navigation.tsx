function Navigation() {
  return (
    <div className="bg-red-400 text-white flex justify-end">
      <ul className="flex gap-16 m-4 mr-16 text-2xl">
        <li className="hover:scale-110"><a href="/">Home</a></li>
        <li className="hover:scale-110"><a href="/projects">Projects</a></li>
      </ul>
    </div>
  )
}

export default Navigation;
