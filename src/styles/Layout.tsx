import { Header } from "../components"

interface LayoutProps {
    children: React.ReactNode;
  }

export const Layout = ({ children }: LayoutProps) =>{
    return(
        <>
        <Header/>
        {children}
        </>
    )
}