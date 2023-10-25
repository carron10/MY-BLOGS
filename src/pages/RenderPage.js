import { BlogFooter, BlogNavBar } from "./Utils"

export const RenderPage = (props) => {
    return (
        <>
            <BlogNavBar />
           { props.Page}
           <BlogFooter/>
        </>
    )
}