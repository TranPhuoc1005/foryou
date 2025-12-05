export default function LoginPage() {
    return (
        <div className="signup-page flex items-center justify-center min-h-screen bg-gray-900">
            <div id="dangnhap" className="w-full max-w-sm p-6">
                <div className="text-center">
                    <img src="img/logo4utrang.png" className="mx-auto w-24" />
                    <h6 className="text-white mb-1">ỨNG DỤNG NỘI BỘ</h6>
                    <h5 className="text-white mb-4">PHẦN MỀM CHO KỸ THUẬT</h5>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 mt-4">
                    <form id="login_form" action="" method="POST">
                        <input type="hidden" name="_token" value="" />

                        <div className="text-xl font-semibold mb-4 mt-3 text-gray-700">Đăng nhập</div>

                        <div id="message-error" className="text-red-500 text-center hidden">
                            <i className="fa fa-warning"></i>
                            <span>Số điện thoại hoặc mật khẩu không đúng, vui lòng kiểm tra lại</span>
                        </div>

                        <div id="dnquanly" className="space-y-5 mt-4">
                            <div className="flex items-center gap-3 border-b border-gray-300 pb-2">
                                <span className="text-gray-500">
                                    <i className="fa fa-phone"></i>
                                </span>
                                <input
                                    type="number"
                                    name="phone"
                                    placeholder="Nhập số điện thoại"
                                    className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
                                    required
                                />
                            </div>

                            <div className="flex items-center gap-3 border-b border-gray-300 pb-2">
                                <span className="text-gray-500">
                                    <i className="fa fa-lock"></i>
                                </span>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Nhập mật khẩu"
                                    className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
                                    required
                                />
                            </div>

                            <button
                                id="btn-submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold mt-2 transition">
                                <i className="fa fa-power-off"></i> ĐĂNG NHẬP
                            </button>

                            <p className="text-center mt-5">
                                <a href="https://foryou.vn/" className="text-blue-600 hover:underline">
                                    Trang chủ
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
