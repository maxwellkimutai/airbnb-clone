import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import ExtraLargeCard from '../components/ExtraLargeCard'
import Footer from '../components/Footer'
import { getDiscoverData, getGetawaysData } from '../mock/index'
import LargeCard from '../components/LargeCard'
import ExperiencesImage from '../assets/images/ad109d56-2421-40cd-98e6-e114160dc85b.jpg'
import OnlineExperiencesImage from '../assets/images/0ce799cb-7553-4369-be9e-d0011e0ef636.jpg'
import OlympiansImage from '../assets/images/f51f70fb-93b7-4974-86e8-1195b64f1353.jpg'
import { Tabs } from 'react-tabs'
import { Tab, TabList, TabPanel } from '../components/Tabs'
import Getaways from '../components/Getaways'

export default function Home({exploreData, cardsData, discoverData, getawaysData}) {
  const getawayTitles = getawaysData.map((getaway) => getaway.title);
  const getawayLocations = getawaysData.map((getaway) => getaway.locations);

  return (
    <div className="">
      <Head>
        <title>AirBnB Clone</title>
      </Head>

      <Header/>
      <Banner/>

      <main className="max-w-full mx-auto px-8 lg:px-36 text-black">
        <section className="pt-6">
          <h2 className="text-3xl font-bold pb-5"> Explore nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({img, distance, location}) => (
            <SmallCard 
              key={location} 
              img={img} 
              distance={distance} 
              location={location}
            />
          ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold py-8">Live Anywhere</h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3">
              {cardsData?.map(({img, title}) => (
                <MediumCard
                  key={title} 
                  img={img} 
                  title={title} 
                />
              ))}
          </div>
          
        </section>

        <ExtraLargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curateed by Airbnb"
          buttonText="Get Inspired"
        />

        <section>
          <h2 className="text-3xl font-bold py-8">Discover things to do</h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3">
            {discoverData?.map(({img, title, description}) => (
              <LargeCard 
                key={title}
                img={img}
                title={title}
                description={description}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold py-8">Inspiration for future getaways</h2>
          <Tabs>
              <TabList>
                {getawayTitles.map((title, index) => (
                  <Tab key={index}>{title}</Tab>
                ))}
              </TabList>
              {getawayLocations.map((location,index) => (
                <TabPanel key={index}>
                  <Getaways key={location.destination} locations={location} />
                </TabPanel>
              ))}
          </Tabs>
        </section>
        
      </main>

      <Footer />

    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp")
    .then((res) => res.json());
  
  const cardsData = await fetch("https://links.papareact.com/zp1")
    .then((res) => res.json());

  const discoverData = await getDiscoverData()
    .then((res) => res);

  const getawaysData = await getGetawaysData()
    .then((res) => res);

  return {
    props: {
      exploreData,
      cardsData,
      discoverData,
      getawaysData,
    },
    revalidate: 1,
  }
}