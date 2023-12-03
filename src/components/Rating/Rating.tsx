type RatingProps = { value: 0 | 1 | 2 | 3 | 4 | 5 }

function Rating({ value }: RatingProps) {
  console.log('Rating rendering')

  return (
    <div>
      {[...new Array(5)].map((_, i) => (
        <Star key={i} selected={i + 1 <= value} />
      ))}
    </div>
  )
}

type StarProps = { selected: boolean }

function Star({ selected }: StarProps) {
  console.log('Star rendering')

  return <span>{selected ? <b>star</b> : 'star'} </span>
}

export { Rating }
