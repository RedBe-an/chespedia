export default function Rules() {
    return (
        <div className="flex flex-col items-center w-full mt-5 px-4">
            <div className="max-w-3xl w-full">
                <h1 className="text-3xl font-bold text-left mb-4">체스 규칙</h1>
                <p className="text-lg text-gray-500 text-left mb-6">체스의 기본 규칙을 배워보세요.</p>
                <div className="w-full">
                    <p className="text-md text-left mb-3">각 기물의 움직임과 규칙을 이해하는 것이 중요합니다.</p>
                    <p className="text-md text-left">게임의 목표는 상대의 킹을 체크메이트하는 것입니다.</p>
                </div>
            </div>
        </div>
    );
}