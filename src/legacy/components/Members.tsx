import React, { useState } from 'react'
import cx from 'classnames'

import TabButton from './TabButton'
import Dropdown from './Dropdown'
import RangeInput from '../assets/icons/range-input'
import styles from './Members.module.css'

const membersTabs: string[] = ['Creators', 'Sellers', 'Buyers']
const rankingFields = ['Ranking', 'Unranked']
const soldFields = ['Sold', 'Bought', 'Active']
const followersFields = ['Followers', 'Following', 'Mutual']
const categoriesFields = [
  'All',
  'Modernism',
  'Impressionism',
  'Chinese Style',
  'Cubism',
  'Glassmorphism',
]

export default function Members() {
  const [activeTab, setActiveTab] = useState<string>(membersTabs[0])
  const [ranking, setRanking] = useState<string>(rankingFields[0])
  const [sold, setSold] = useState<string>(soldFields[0])
  const [followers, setFollowers] = useState<string>(followersFields[0])
  const [category, setCategory] = useState<string>(categoriesFields[0])

  return (
    <div className={cx('h-screen flex flex-col', styles.container, 'bg-white')}>
      <div
        className={cx(
          'container mx-auto',
          styles.controlspanel,
          'justify-between',
        )}
      >
        <span className={styles.controlspaneltitle}>Members</span>

        <div className='flex gap-2.5'>
          {membersTabs.map((tab, key) => (
            <TabButton
              text={tab}
              key={key}
              active={tab === activeTab}
              onClick={() => setActiveTab(tab)}
            />
          ))}
        </div>

        <div className='flex items-center'>
          <span className='px-3'>Sort by</span>
          <div className='flex gap-5'>
            <Dropdown
              options={rankingFields}
              selectedOption={ranking}
              onOptionSelect={setRanking}
            />
            <Dropdown
              options={soldFields}
              selectedOption={sold}
              onOptionSelect={setSold}
            />
            <Dropdown
              options={followersFields}
              selectedOption={followers}
              onOptionSelect={setFollowers}
            />
          </div>
        </div>
      </div>

      <div className={cx('flex-1 py-4', styles.contentcontainer)}>
        <div className={cx('container mx-auto bg-white', styles.content)}>
          <div className='flex justify-between'>
            <Dropdown
              label='Categories'
              options={categoriesFields}
              selectedOption={category}
              onOptionSelect={setCategory}
            />
            <div className='wrapper flex flex-row items-center gap-2'>
              <RangeInput
                label='Sales turover:'
                min={20}
                max={1000}
                ratio={2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
