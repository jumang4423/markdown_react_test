import { Link } from 'react-router'

// トップページのUI
export const BlogIndex = (blogs) => () => {
  return (
    <ul>
      {[...blogs.keys()].map(path =>
        <li key={path}>
          <Link to={'/' + path}>
            {blogs.get(path).title || path}
          </Link>
        </li>
      )}
    </ul>
  )
}

export default BlogIndex