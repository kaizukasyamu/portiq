export default function Home() {
  return (
    
   <> 
      <div className="bg-white text-black ">

    <header className="flex justify-between items-center p-4 border-b font-bold">
      
      <div>
        ハンバーガー
      </div>

      <div>
        PortIQ
      </div>
      
      <div>
        使い方 ログイン
      </div>
    </header>

    <main className="text-center mt-20">

      <h1 className="text-2xl">
        AI Portfolio Reviewer
      </h1>

      <textarea 
        className="w-96 h-32 border rounded-lg p-10"
        placeholder="ここにポートフォリオを貼り付けてください"
      />          

      <button 
        className="bg-blue-600 text-white px-3 py-1 rounded-lg"
      >  
       添削する
      </button>  

    </main>

    <footer className="text-center  text-sl border-t p-4">

      利用規約

      プライバシーポリシー

      FAQ

    </footer>
    
    </div>
   </> 
  );
}