import { Helmet, HelmetProvider } from "react-helmet-async";

 const MetaComponent = ({ title = "MARTPIN ", description="Example description" }) => {
    return (
       <HelmetProvider>
           <Helmet>
              <title>{title}</title> 
              <meta name="description" content={description} />
           </Helmet>
       </HelmetProvider> 
    )
 }

 export default MetaComponent