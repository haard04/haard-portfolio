import type { ComponentType } from 'react';
import { FaAws, FaCss3Alt, FaDatabase, FaDocker, FaGithub, FaHtml5, FaJava, FaLinux, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import { SiAndroidstudio, SiBootstrap, SiCplusplus, SiDart, SiDjango, SiExpress, SiFastapi, SiFirebase, SiFlask, SiFlutter, SiGo, SiGooglecloud, SiJavascript, SiJenkins, SiJira, SiKotlin, SiMongodb, SiMysql, SiNestjs, SiNextdotjs, SiPostgresql, SiPostman, SiScala, SiSnowflake, SiSupabase, SiTerraform, SiTypescript, SiVercel } from 'react-icons/si';

export type Skill = {
  Icon: ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
  name: string;
  level: string;
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming Languages',
    skills: [
      { Icon: SiCplusplus, name: 'C/C++', level: 'Experienced' },
      { Icon: FaPython, name: 'Python', level: 'Experienced' },
      { Icon: SiTypescript, name: 'TypeScript', level: 'Experienced' },
      { Icon: SiJavascript, name: 'Javascript', level: 'Experienced' },
      { Icon: FaDatabase, name: 'SQL', level: 'Intermediate' },
      { Icon: FaJava, name: 'Java', level: 'Intermediate' },
      { Icon: SiDart, name: 'Dart', level: 'Experienced' },
      { Icon: SiScala, name: 'Scala', level: 'Intermediate' },
      { Icon: SiKotlin, name: 'Kotlin', level: 'Intermediate' },
      { Icon: SiGo, name: 'Go', level: 'Basic' },
    ],
  },
  {
    title: 'Dev Frameworks',
    skills: [
      { Icon: FaNodeJs, name: 'Node Js', level: 'Experienced' },
      { Icon: SiNestjs, name: 'Nest Js', level: 'Experienced' },
      { Icon: SiFlutter, name: 'Flutter', level: 'Experienced' },
      { Icon: SiDjango, name: 'Django', level: 'Experienced' },
      { Icon: SiExpress, name: 'Express Js', level: 'Experienced' },
      { Icon: FaReact, name: 'React Js', level: 'Experienced' },
      { Icon: SiNextdotjs, name: 'Next Js', level: 'Experienced' },
      { Icon: SiFlask, name: 'Flask', level: 'Intermediate' },
      { Icon: SiFastapi, name: 'FAST API', level: 'Experienced' },
      { Icon: FaHtml5, name: 'HTML', level: 'Experienced' },
      { Icon: FaCss3Alt, name: 'CSS', level: 'Intermediate' },
      { Icon: SiBootstrap, name: 'Bootstrap', level: 'Basic' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { Icon: SiMongodb, name: 'MongoDB', level: 'Experienced' },
      { Icon: SiFirebase, name: 'Firestore', level: 'Experienced' },
      { Icon: SiMysql, name: 'MySQL', level: 'Experienced' },
      { Icon: SiPostgresql, name: 'PostgreSQL', level: 'Intermediate' },
      { Icon: SiSupabase, name: 'Supabase', level: 'Intermediate' },
      { Icon: FaAws, name: 'DynamoDB', level: 'Intermediate' },
      { Icon: FaDatabase, name: 'Pinecone (Vector DB)', level: 'Experienced' },
    ],
  },
  {
    title: 'Tools & Tech',
    skills: [
      { Icon: FaGithub, name: 'Git', level: 'Experienced' },
      { Icon: FaLinux, name: 'Linux', level: 'Experienced' },
      { Icon: SiPostman, name: 'Postman', level: 'Experienced' },
      { Icon: SiFirebase, name: 'Firebase', level: 'Experienced' },
      { Icon: FaAws, name: 'AWS', level: 'Experienced' },
      { Icon: FaDocker, name: 'Docker', level: 'Experienced' },
      { Icon: SiGooglecloud, name: 'Google Cloud Platform', level: 'Experienced' },
      { Icon: SiVercel, name: 'Vercel', level: 'Experienced' },
      { Icon: SiSnowflake, name: 'Snowflake', level: 'Experienced' },
      { Icon: SiJira, name: 'Jira', level: 'Experienced' },
      { Icon: SiJenkins, name: 'Jenkins', level: 'Intermediate' },
      { Icon: SiAndroidstudio, name: 'Android Studio', level: 'Experienced' },
      { Icon: SiTerraform, name: 'Terraform', level: 'Intermediate' },
    ],
  },
];
