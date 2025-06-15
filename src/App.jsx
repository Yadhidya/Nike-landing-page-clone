import { CustomersReviews,Hero,Footer,Subscribe,Services,SuperQuality, PopularProducts,SpecialOffers } from "./Sections";
import Nav from'./Components/Nav';
const App=()=>{
  return (
  <main className="relative ">
   <Nav></Nav>
   <section className="xl:padding-l wide:padding-r padding-b">
    <Hero></Hero>
   </section>
   <section className="padding">
     <PopularProducts></PopularProducts>
   </section>
   <section className="padding">
      <SuperQuality></SuperQuality>
   </section>
   <section className="padding-x py-10">
      <Services></Services>
   </section>
   <section className="padding">
      <SpecialOffers></SpecialOffers>
   </section>
    <section className="bg-pale-blue padding">
     <CustomersReviews></CustomersReviews>
   </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe></Subscribe> 
   </section>
    <section className="bg-black  padding-x padding-y">
     <Footer></Footer>
   </section>
  </main>
  )
}

export default App;
