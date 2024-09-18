import { Hero, Footer, EventDetails, ContactUs, Nav } from './components';


function App() {

  return (
    <>
      <div className='overflow-x-hidden'>
        <div className='fixed top-0 -z-10 h-full w-full'>
          <div className="absolute top-0 z-[-2] h-screen w-screen"></div>
        </div>

        <div className='container mx-auto'>        
         
          <Nav />
          <Hero />
          <EventDetails />
          <ContactUs />
          <section className='bg-black'>
          <Footer />
          </section>
        </div>
      </div>
    </>
  )
}

export default App