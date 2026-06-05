
// const navigation = [
//     {name: 'Academic', href: '#'},
//     {name: 'Research', href: '#'},
//     {name: 'Campus Life', href: '#'},
//     {name: 'People', href: '#'},
//     {name: 'News', href: '#'},
//     {name: 'About UI', href: '#'},
// ]
const Navbar = () => {
return (
    <>
    {/* <div className="nav_float">
        <div className="item gotop">TOP</div>
    </div> */}
        <div className="header" >
        {/* <div className="d1 flex justify-center">
        <div className="nav_l flex" >
            <div className="min-height-10">
            <a href="/students.html" target="_blank"><span>Students</span></a><a href="/staff.html"
                target="_blank"><span>Faculty &amp; Staff</span></a><a href="http://www.pku.org.cn/"
                target="_blank"><span>Alumni</span></a><a href="/campus_left.html#cam5"
                target="_blank"><span>Visitors</span></a><a href="/collaboration/11604.html"
                target="_blank"><span>Media</span></a>
            </div>
        </div>
        <div className="r flex flex-row">
            <div className="nav_r flex">
            <div className="min-height-10">
                <a href="https://its.pku.edu.cn/" target="_blank"><span>ITS</span></a><a
                href="https://www.lib.pku.edu.cn/portal/en" target="_blank"><span>Library</span></a>
                <a href="https://e.bjmu.edu.cn/" target="_blank"><span>PKUHSC</span></a>
            </div>
            </div>
            <div className="lang"><a href="https://www.pku.edu.cn/" target="_blank"><span>中文</span></a></div>
            <div className="lang min-width-15" ><a><span></span></a></div>
            <div className="scbtn">&#xe672;</div>
        </div>
        </div> */}

        <div className="d2 flex justify-between">
            <div className="logo flex flex-row items-center">
                <div>
                    <a href="/">
                        {/* <img class="w" src="/assets/icon/logo-navbar.png" alt="logo ui" /> */}
                        <img className="w" src="/assets/icon/logo-navbar.png" alt="logo ui" />
                    </a>
                </div>        
            </div>
            <div className="nav_main f24">
                <div className="inner flex">
                    <div className="item nav-lv1-item">
                        <a href="#">Academic</a>
                    </div>
                    <div className="item nav-lv1-item">
                        <a href="#">Research</a>
                    </div>
                    <div className="item nav-lv1-item">
                        <a href="#">Campus Life</a>
                    </div>
                    <div className="item nav-lv1-item">
                        <a href="#">People</a>
                    </div>
                    <div className="item nav-lv1-item">
                        <a href="#">News</a>
                    </div>
                    <div className="item nav-lv1-item">
                        <a href="#">About UI</a>
                    </div>
                </div>
            </div>
            <div className="inner flex">
                <div className="flex lg-flex-1 gap-x-12 items-center">
                    <img src="/assets/icon/icon-navbar-search.png" alt="search" className="h-5 w-auto cursor-pointer"/>
                    <img src="/assets/icon/icon-navbar-cn.png" alt="cn" className="h-5 w-auto cursor-pointer"/>
                    <img src="/assets/icon/icon-navbar-menu.png" alt="menu" className="h-4 w-auto cursor-pointer"/>
                </div>
            </div>

        </div>
    </div>

    </>
)
}

export default Navbar








































{/* <div className="bg-white">
    <header className="absolute inset-x-0 top-0 x-50">
        <nav className="bg-navbar-first
            mx-auto flex items-center justify-between p-3 lg:px-8" aria-label="Global">
            <div className="flex lg-flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                    <img  src="/assets/icon/logo-navbar.png" alt="logo-ui" className="h-9 w-auto"/>
                </a>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">{item.name}</a>
                ))}
            </div>
            <div className="flex lg-flex-1 gap-x-12 items-center">
                <img src="/assets/icon/icon-navbar-search.png" alt="search" className="h-5 w-auto"/>
                <img src="/assets/icon/icon-navbar-cn.png" alt="cn" className="h-5 w-auto"/>
                <img src="/assets/icon/icon-navbar-menu.png" alt="menu" className="h-4 w-auto"/>
            </div>
        </nav>
        
    </header>
    </div> */}