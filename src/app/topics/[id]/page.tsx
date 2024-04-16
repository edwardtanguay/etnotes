'use client';
import * as appModel from '../../../models/model';
import * as qdat from '../../../qtools/qdat';
import '../../outline.scss';

export default function Page({ params }: { params: { id: string } }) {
   const { id } = params;
   const topic = appModel.topics.find(m => String(m.id) === id);

   return (
      <>
         {topic && (
            <>
               <div className='border-slate-600 bg-gray-950 border p-5 mt-6'>
                  <div className="text-yellow-400 smallcaps text-md text-opacity-70">
                     TOPIC:{' '}
                     {qdat.smartDateWithYear(topic.systemWhenCreated)} -{' '}
                     <span dangerouslySetInnerHTML={{ __html: topic.category }}></span>
                  </div>
                  <div className='text-2xl'>{topic.title}</div>
               </div>
               <div className='bg-slate-900 p-3 border-r border-b border-l border-slate-600'>
                  <div dangerouslySetInnerHTML={{ __html: topic.bodyHtml }}></div>
               </div>
            </>
         )}
      </>
   )
}