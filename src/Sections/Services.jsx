import { services } from "../Constants"
import ServiceCard from "../Components/ServiceCard";



const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((ser)=>(
        <ServiceCard key={ser.label} {...ser}/>
      ))}
      
    </section>
  )
}

export default Services
