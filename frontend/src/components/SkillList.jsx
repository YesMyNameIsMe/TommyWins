import React from 'react'

const SkillList = ({className, skills}) => {
    
  return (
    <div className={`${className} flex flex-wrap min-w-[700px] min-h-[150px] gap-4 items-center justify-center bg-gradient-to-b from-darkestBlue to-darkerBlue drop-shadow-xl p-6 rounded-2xl select-none`}>
        {skills.map((skill, index) => (
            <div className="flex items-center justify-center rounded-full px-6 py-3 max-w-[250px] h-auto bg-clearBlue transition-transform duration-200 hover:scale-110" key={index}>
                <h1 className="font-mono font-bold text-white text-2xl">
                    {skill.name}
                </h1>
            </div>
        ))}
    </div>
  )
}

export default SkillList