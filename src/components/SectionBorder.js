function SectionBorder({position='top', color='secondary'}) {
    return (
        <div className='sectionBorder-container'>
            <div className={`sectionBorder sectionBorder-${position} sectionBorder-${position}-${color}`} />
        </div>
    )
}

export default SectionBorder