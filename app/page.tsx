"use client";

export default function Home() {

  async function handleReview(){

    await fetch("/api/grade",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        portfolio: "テスト",
      }),
    });

  }

  return (
    
   <> 
      <div className="bg-white text-black min-h-screen ">

    <header className="flex justify-between items-center p-4 border-b font-bold">
      
      <div className="flex gap-4">

      <button>
        ハンバーガー
      </button>

      <button>
        PortIQ
      </button>

      </div>
      
      <div className="flex gap-4">

      <button>
        使い方
      </button>

      <button>
        ログイン
      </button>

      </div>

    </header>

    <div className="flex">

     <aside className="w-48 bg-gray-100 p-4 h-screen flex flex-col justify-between">
      
        <div className="flex flex-col gap-3 pl-4 pb-4">

        <button className="w-full text-left rounded-md px-1 py-1 hover:bg-gray-200">
          新しい添削</button>

        <button className="w-full text-left rounded-md px-1 py-1 hover:bg-gray-200">
          添削履歴</button>

        <button className="w-full text-left rounded-md px-1 py-1 hover:bg-gray-200">
          保存済み</button>

        <button className="w-full text-left rounded-md px-1 py-1 hover:bg-gray-200">
          PDF出力</button>

       </div>

       <div  className="flex flex-col gap-3 pl-4">

        <button className="w-full text-left rounded-md px-1 py-1 hover:bg-gray-200">
          利用規約</button>

        <button className="w-full text-left rounded-md px-1 py-1 hover:bg-gray-200">
          お問い合わせ</button>

        <button className="w-full text-left rounded-md px-1 py-1 hover:bg-gray-200">
          FAQ</button>

       </div> 

     </aside>  

     <main className="text-center mt-20 flex-1 overflow-y-auto">

      <h1 className="text-2xl">
        AI Portfolio Reviewer
      </h1>

      <textarea 
        className="w-full max-w-3xl h-32 border rounded-lg p-4"
        placeholder="ここにポートフォリオを貼り付けてください"
      />          
      <div>

       <button 
        className="bg-blue-600 text-white px-3 py-1 rounded-lg"
        onClick={handleReview}
       >  
        添削する
       </button>  

      </div>

     </main>

    </div>
    
    </div>
   </> 
  );
}