function Footer() {
    return (
        <footer className="px-8 lg:px-36 pt-10 pb-5 bg-gray-100 text-gray-600 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10">
            <div className="space-y-4 text-sm text-gray-800 pb-6 border-b border-gray-300">
                <h5 className="font-bold">ABOUT</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Airbnb {new Date().getFullYear()}</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
                <p>HotelTonight</p>
                <p>Airbnb for Work</p>
                <p>Made possible by Hosts</p>
                <p>Careers</p>
                <p>Founders' Letter</p>
            </div>
            <div className="space-y-4 text-sm text-gray-800 pb-6 border-b border-gray-300">
                <h5 className="font-bold">COMMUNITY</h5>
                <p>Diversity &amp; Belonging</p>
                <p>Aganist Discrimination</p>
                <p>Accessibility</p>
                <p>Airbnb Associates</p>
                <p>Host Afgan refugees</p>
                <p>Guest Referrals</p>
                <p>Gift cards</p>
                <p>Airbnb.org</p>
            </div>
            <div className="space-y-4 text-sm text-gray-800 pb-6 border-b border-gray-300">
                <h5 className="font-bold">HOST</h5>
                <p>Host your home</p>
                <p>Host an Online Experience</p>
                <p>Host an Experience </p>
                <p>Responsible hosting</p>
                <p>Resource Center</p>
                <p>Community Center</p>
            </div>
            <div className="space-y-4 text-sm text-gray-800 pb-6 border-b border-gray-300">
                <h5 className="font-bold">SUPPORT</h5>
                <p>Our COVID-19 Response</p>
                <p>Help Center</p>
                <p>Cancelation options</p>
                <p>Heighborhood Support</p>
                <p>Trust &amp; Safety</p>
            </div>
          </div>
          <div className="flex text-gray-800 mt-5">
              <div>&copy; {new Date().getFullYear()} Airbnb, Inc.</div>
              <div>
                <span className="mx-2">·</span>
                <a href="" className="hover:underline hover:text-gray-600">Privacy</a>
                <span className="mx-2">·</span>
                <a href="" className="hover:underline hover:text-gray-600">Terms</a>
                <span className="mx-2">·</span>
                <a href="" className="hover:underline hover:text-gray-600">Sitemap</a>
              </div>
          </div>
        </footer>
    )
}

export default Footer
