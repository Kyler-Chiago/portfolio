interface SkillProps {
  skill: string;
}

const SkillBox: React.FC<SkillProps> = ({ skill }) => {
  return (
    <div className='skillBox mt-[8px] mr-[8px] font-semibold'>{skill}</div>
  );
};

export default SkillBox;
