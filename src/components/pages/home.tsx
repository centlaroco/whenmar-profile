import { Navbar } from "@/components/common/header"
import { HomeSection } from "@/components/features/homeSec"
import { Footer } from "@/components/common/footer"

export default function Home(){ 
  return(
    <> 
    <Navbar /> 
    <HomeSection/>
    <Footer />
    </>
  )
}