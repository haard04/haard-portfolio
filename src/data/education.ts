export type EducationItem = {
  id: number;
  Institution: string;
  Location: string;
  Degree: string;
  Duration: string;
  /* YYYY-MM bounds -- these place the entry on the shared timeline axis. */
  start: string;
  end: string;
  detail1: string;
  detail2: string;
};

// TODO(haard): placeholder values -- swap in the real institutions/grades.
export const education: EducationItem[] = [
  {
    id: 1,
    Institution: 'Pandit Deendayal Energy University',
    Location: 'Gandhinagar, Gujarat, India',
    Degree: 'B.Tech, Computer Science & Engineering',
    Duration: 'July 2021 - May 2025',
    start: '2021-07',
    end: '2025-05',
    detail1: '➔ CGPA 8.90 / 10 — coursework in Computer Science and Engineering.',
    detail2: '',
  }
];
