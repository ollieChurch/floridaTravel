function SectionBorder({position='top', color='secondary'}) {
    return <div className={`sectionBorder sectionBorder-${position} sectionBorder-${position}-${color}`} />
}

export default SectionBorder