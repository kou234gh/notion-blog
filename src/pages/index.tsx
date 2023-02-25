import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'
import IndexSub from './blog/index'

export default function Index() {
  return (
    <>
      <div className={sharedStyles.layout}>
        <h1>記録</h1>
        <Header titlePre="Home" />
        {/* <IndexSub preview={true}/> */}
      </div>
    </>
  )
}
