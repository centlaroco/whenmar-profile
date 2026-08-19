import { AboutSection } from "@/components/features/aboutSec";
import { Navbar } from "@/components/common/header";
import {Footer} from "@/components/common/footer"

export default function Home(){ 
  return( 
    <> 
    <Navbar />
    <AboutSection /> 
    <Footer />
    </>
  )
}