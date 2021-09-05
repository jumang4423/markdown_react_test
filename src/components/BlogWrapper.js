import { Link } from 'react-router'

// ブログページのUI
export const BlogWrapper = ({ __content }) => () => {
    return (
        <div>
            <Link to='/'>
                戻る
            </Link>

            {/* 線 */}
            <hr /> 

            <div className='markdown-body' dangerouslySetInnerHTML={{ __html: __content }}>
            </div>
        </div>
    )
}
