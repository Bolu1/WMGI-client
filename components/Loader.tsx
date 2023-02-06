import React from 'react'

function Loader() {
  return (
    <div>
        <div style={{ minHeight: "80vh" }}>
              <div className="flex justify-center mt-5 mt-26 space-x-2">
                <div className="w-4 h-4 rounded-full animate-pulse bg-gold"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-gold"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-gold"></div>
              </div>
            </div>
    </div>
  )
}

export default Loader