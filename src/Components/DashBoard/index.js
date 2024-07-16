import './index.css'

const DashBoard = () => {
  const loginEmail = localStorage.getItem('loginEmail')
  const loginPassword = localStorage.getItem('loginPassword')

  return (
    <div className='dashboard-container'>
      <div className='user-information-container'>
        <p className='dashboard-description'>{`This is ${loginEmail} my Email, I have learnt HTML,CSS,Javascript, React JS, Node Js, Python and SQL..
      I have developed a Nxt Trendz online application during my training period which is similar to E-commerce platform like FlipKart,Amazon and also I have developed Movies Clone App which is similar to Netflix and Amazon Prime..
      
      `}</p>
      </div>
    </div>
  )
}

export default DashBoard
