import './Button.css'

function Button({data , isActive}) {
  return (
    <div>
      <button className={isActive ? 'btn-active' : 'btn-default'}>
       {data}
      </button>
    </div>
  )
}

export default Button
