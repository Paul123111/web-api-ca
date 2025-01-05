const VerticalScrollBox = (props) => {
  return (
    <>
      <div className="verticalScroll">
        {props.children}
      </div>
    </>
  )
}

export default VerticalScrollBox