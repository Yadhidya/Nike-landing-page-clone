
import { offer } from "../assets/images";
import Button from "../Components/Button";


const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src= {offer} width={770} height={680} 
        className="object-contain w-full"/>

      </div>
      <div className="flex flex-1 flex-col"> 
           <h2 className=" font-palanquin text-4xl capitalize  font-bold lg:max-w">
            <span className="text-coral-red"> Special</span>
            <br/>
            Offer
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier
            selections to incredible savings we offer unparalleled value that sets us apart
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest  expectations. Your
            Journey with us in nothing short of exceptional.
          </p>
          <div className="mt-11 flex flex-wrap gap-4">
            <Button label="View Details"  />
            <Button label="Learn More " backgroundColor="bg-white" borderColor="border-salte-gray" textColor="text-slate-gray"/>
          </div>
        </div>
    </section>
  )
}

export default SpecialOffers
