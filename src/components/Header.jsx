import React from 'react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        {name: 'Home', link: '#home'},
        {name: 'Collection', link: '#collec'},
        {name: 'About', link: '#about'}
    ]

    return (
        <>
            <header className='bg-purple-950 text-white p-4'>
                <div className='container mx-auto py-2'>
                    <div className='flex item-center justify-between'>
                        <div className='flex items-center'>
                            <img src="/vite.svg" alt="" className='inline-block mr-2 w-10' />
                            <h1 className='text-2xl font-bold'>Card Gallery</h1>
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header