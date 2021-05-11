// const BlogList = (props) => {
//     const blogs = props.blogs;
//     const title = props.title;

//another way is to distructure the props inside the parentheses
    const BlogList = ({ blogs, title }) => {
    
    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
             {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;