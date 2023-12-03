import { Accordion } from './components/Accordion/Accordion'
import { Rating } from './components/Rating/Rating'

function App() {
  console.log('App rendering')

  return (
    <>
      <PageTitle text={'This is title'} />
      Article 1
      <Rating value={3} />
      <Accordion title={'Меню'} />
      <Accordion collapsed title={'Меню'} />
      Article 2
      <Rating value={5} />
    </>
  )
}

type PageTitleProps = { text: string }

function PageTitle({ text }: PageTitleProps) {
  console.log('PageTitle rendering')

  return <h1>{text}</h1>
}

function hello() {
  debugger
  alert('Hello')
}

export default App
