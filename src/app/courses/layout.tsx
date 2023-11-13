interface CoursesLayoutProps {
  children: React.ReactNode;
}

export default async function CoursesLayout({ children }: CoursesLayoutProps) {

  return (
    <div className='container mx-auto mb-16 items-center flex prose prose-xl prose-slate text-justify justify-center dark:prose-invert'>
      {children}
    </div>
  );
}
