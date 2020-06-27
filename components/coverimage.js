import cn from 'classnames'
import Link from 'next/link'

export default function CoverImage({ title, src, slug, alt, className }) {
  const image = (
    <img
      src={src}
      alt={`${title}의 커버 이미지입니다.`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )
  return (
    <div className="-mx-5 mb-6 sm:mx-0">
      {slug ? (
        <Link as={`/post/${slug}`} href="/post/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
