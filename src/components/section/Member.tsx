import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Alice',
    position: 'CEO',
    image: '/alice.jpg',
    twitter: 'https://twitter.com/alice',
    website: 'https://alice.com',
  },
  {
    name: 'Bob',
    position: 'CTO',
    image: '/bob.jpg',
    github: 'https://github.com/bob',
    website: 'https://bob.com',
  },
  {
    name: 'Charlie',
    position: 'Designer',
    image: '/charlie.jpg',
    dribbble: 'https://dribbble.com/charlie',
    website: 'https://charlie.com',
  },
];
export default function Members() {
  return (
    <div>
      <div className='flex flex-wrap justify-center'>
        {teamMembers.map((member) => (
          <div key={member.name} className='m-4 p-4 bg-gray-100 rounded-lg shadow-lg'>
            <div className='flex items-center justify-center'>
              <Image src={member.image} alt={member.name} width={100} height={100} className='rounded-full' />
            </div>
            <div className='text-center mt-2'>
              <h2 className='text-lg font-bold'>{member.name}</h2>
              <p className='text-gray-600'>{member.position}</p>
              <div className='flex justify-center space-x-2 mt-2'>
                {member.twitter && (
                  <Link href={member.twitter}>
                    <Image src='/twitter.png' alt='Twitter' width={24} height={24} />
                  </Link>
                )}
                {member.github && (
                  <Link href={member.github}>
                    <Image src='/github.png' alt='GitHub' width={24} height={24} />
                  </Link>
                )}
                {member.dribbble && (
                  <Link href={member.dribbble}>
                    <Image src='/dribbble.png' alt='Dribbble' width={24} height={24} />
                  </Link>
                )}
                {member.website && (
                  <Link href={member.website}>
                    <Image src='/website.png' alt='Website' width={24} height={24} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
