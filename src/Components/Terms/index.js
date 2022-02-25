import clsx from 'clsx';
import { useContext, useEffect } from 'react';

import { Context } from '../Store';
import NavBar from '../NavBar';
import styles from './Terms.module.css'

function Terms() {
    const { setHeaderColor } = useContext(Context);
    useEffect(() => {
        setHeaderColor('black');
    });

    return (
        <div className={clsx('container')}>
            <div className={clsx('grid wide')}>
                <div className={clsx('row')}>
                    <div className={clsx('col l-2 m-0 s-0')}>
                        <NavBar />
                    </div>
                    <div className={clsx('col l-10 m-12 s-12')}>
                        <div className={clsx(styles.colItem)}>
                            {/* Preservation */}
                            <label className={clsx(styles.paraLabel)} htmlFor='preservation'>Product preservation <i className='bx bx-plus-medical'></i></label>
                            <input
                                hidden
                                type='checkbox'
                                id='preservation'
                                className={clsx(styles.inputPre)}
                            />
                            <p className={clsx(styles.preservation, styles.info)}>
                                / ÁO THUN /<br />
                                _ Cách an toàn nhất để giặt chiếc áo thun yêu thích của bạn là giặt tay bằng nước ấm với các loại bột giặt chuyên biệt cho việc giặt tay. Nếu giặt với máy giặt hãy chọn chế độ giặt chuyên biệt cho áo thun;<br />
                                _Phơi áo nơi râm mát và tránh ánh nắng trực tiếp. Cố gắng hết sức để tránh chất tẩy rửa hoặc thuốc tẩy có gốc clo, vì điều này sẽ làm biến tính sợi cotton.<br />
                                / JEAN & DENIM /<br />
                                _ Luôn giặt Jean từ trong ra ngoài bằng nước lạnh theo chỉ dẫn trên mạc thành phần hoặc bằng tay. Khi phơi Jean & Denim dưới ánh nắng mặt trời thì phải phơi mặt trong chứ không được phơi mặt ngoài (Còn nếu bạn thực sự muốn denim bị phai màu nhanh hơn, hãy giặt một lần trong nước nóng.)<br />
                                _Nếu bạn có một chiếc quần/áo Jean hay Denim tối màu. Hãy thêm 1/2 chén giấm trắng chưng cất vào quy trình giặt cuối cùng trong khi giặt giũ để giúp duy trì màu sắc cho chiếc quần/áo này của ban.<br />
                                / KHAKI & CHINOS /<br />
                                _ Giặt giũ: Chúng tôi khuyên bạn nên lộn trái quần trước khi giặt; Giặt bằng tay hoặc máy ( bạn nhớ chỉnh chế độ giặt riêng biệt cho quần nhé ) và không nên sử dụng chất tẩy quá mạnh. Sau đó treo để khô. Không khí sẽ làm khô quần áo và giúp giảm mài mòn bề mặt.<br />
                                / ÁO KHOÁC /<br />
                                _ Không gì đảm bảo rằng áo khoác của bạn sẽ sạch hơn nếu bạn giặt nó trong nước ấm, 30° C thường là đủ. Nhiệt độ thấp hơn sẽ kéo dài vòng đời của áo khoác khi có sợi màu nhuộm. Các mẹo khác để bảo vệ áo khoác của bạn là kéo dây kéo áo khoác, túi, đóng nút áo trước khi giặt vì những thứ này có thể làm hỏng bề mặt vải. Để bảo vệ màu sắc, áo khoác cũng nên được lộn trái trước khi giặt và không nên để trong máy giặt quá lâu sau khi giặt.<br />
                                “Lời Khuyên Từ Chuyên Gia “<br />
                                Trước khi giặt quần áo, bạn hãy thử trước xem đồ có bị ra màu không. Cho đồ cần giặt vào chậu nước xà phòng và ngâm trong nửa giờ. Nếu có hiện tượng ra màu - nghĩa là quần áo đó cần được chăm sóc đặc biệt khi giặt giũ! “
                            </p>

                            {/* Refund */}
                            <label className={clsx(styles.paraLabel)} htmlFor='refund'>Product refund pocily <i className='bx bx-plus-medical'></i></label>
                            <input
                                hidden
                                type='checkbox'
                                id='refund'
                                className={clsx(styles.inputRefund)}
                            />
                            <p className={clsx(styles.refund, styles.info)}>
                                / ĐỔI SẢN PHẨM /<br />
                                _ Thời gian đổi trong vòng 3 ngày kể từ khi các bạn mua. Khách hàng mua online được tính từ ngày nhận hàng.<br />
                                _ Sản phẩm đổi phải còn nguyên tem, nhãn mác, chưa qua sử dụng, không mùi, dính bẩn, hay giặt qua một lần, và có toàn bộ bao bì và hóa đơn mua hàng kèm theo.<br />
                                _ Khách hàng được đổi sản phẩm theo yêu cầu kích cỡ ( Size ), do lỗi sản xuất.<br />
                                _ Không đổi sản phẩm bán trong các đợt cửa hàng Sale Off, hoặc hàng đã được đổi một lần trước đó, trừ trường hợp sản phẩm đó lại gặp lỗi kỹ thuật.<br />
                                _ Các bạn mua online, khi nhận hàng xong, các bạn vui lòng kiểm tra sản phẩm sau khi thanh toán cho nhân viên giao hàng, nếu có lỗi sản xuất xin báo ngay về cho chúng tôi, không nên mặc thử, hoặc sử dụng sản phẩm sau khi phát hiện lỗi .<br />
                                / GIÁ TRỊ ĐỔI SẢN PHẨM /<br />
                                _ Sản phẩm đổi phải là sản phẩm cùng loại. Không nhận đổi sản phẩm khác loại .<br />
                                _ Nếu sản phẩm đổi đã hết hàng, khách hàng sẽ được chọn đổi sản phẩm khác ngang giá hoặc giá cao hơn.<br />
                                / Thời gian giải quyết việc đổi sản phẩm /<br />
                                _ Sản phẩm đổi ngay giải quyết không quá 01 ngày ( 24h) _ Sản phẩm cần thẩm định do lỗi sản xuất giải quyết không quá 3 ngày.<br />
                                / NHỮNG TRƯỜNG HỢP TỪ CHỐI ĐỔI SẢN PHẨM /<br />
                                _ Không đáp ứng các điều kiện đổi hàng như đã nêu trên<br />
                                _ Hàng nhìn còn mới, còn nguyên tem mác nhưng có dấu hiệu bị bẩn, bị rách, trầy xước, đã giặt qua một lần, sản phẩm đã sử dụng, các phụ kiện của hàng không còn đầy đủ hoặc bị hư hại do các tác nhân bên ngoài cửa hàng sau khi mua.<br />
                                _ Khi mua về, các bạn đổi ý và muốn đổi sản phẩm khác.<br />
                                _ Mua hàng và thử tại cửa hàng nhưng khi về lại đổi ý.<br />
                            </p>

                            {/* Preferential */}
                            <label className={clsx(styles.paraLabel)} htmlFor='preferential'>preferential for members <i className='bx bx-plus-medical'></i></label>
                            <input
                                hidden
                                type='checkbox'
                                id='preferential'
                                className={clsx(styles.inputPrefer)}
                            />
                            <p className={clsx(styles.preferential, styles.info)}>
                                Khách hàng sẽ nhận được những đặc quyền tương ứng với mỗi mức mua hàng như sau: <br />
                                <br />
                                1/ STAR: mức mua hàng 5.000.000 – 19.999.999 VND<br />
                                Giảm 5% mỗi lần mua hàng và giảm 15% trong ngày sinh nhật<br />
                                <br />
                                2/ MARS: mức mua hàng 20.000.000 – 49.999.999 VND<br />
                                Giảm 10% mỗi lần mua hàng và giảm 20% trong ngày sinh nhật<br />
                                <br />
                                3/ URANUS: mức mua hàng 50.000.000 – 99.999.999 VND<br />
                                Giảm 15% mỗi lần mua hàng và giảm 25% trong ngày sinh nhật<br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Terms