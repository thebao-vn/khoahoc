// Dữ liệu 6 chủ đề mở đầu (Dashboard)
const introData = [
    {
        title: "1. Lời mở đầu",
        content: "<p>Trong kỷ nguyên số, chỉ với một cú chạm trên màn hình, hàng Terabyte dữ liệu đã băng qua các đại dương, vượt qua hàng ngàn kilomet cáp quang Single-mode để phản hồi yêu cầu của chúng ta trong tích tắc. Chúng ta thường coi sự hiện diện của Internet là điều hiển nhiên, nhưng đằng sau sự mượt mà đó là một \"hệ sinh thái\" của các thiết bị phần cứng tinh vi và các giao thức phức tạp. Với tư cách là một kiến trúc sư mạng, tôi nhìn thấy hạ tầng không chỉ là những sợi dây đồng UTP hay những bộ định tuyến (Router) khô khan, mà là một thực thể đang chuyển mình mạnh mẽ. Bài viết này sẽ đưa bạn khám phá 5 bước ngoặt cốt lõi đã tái định nghĩa toàn bộ ngành quản trị mạng, từ việc \"gõ lệnh\" thủ công sang tư duy chiến lược về lập trình và trí tuệ nhân tạo.</p>"
    },
    {
        title: "2. SDN - Khi mạng máy tính sở hữu \"não bộ\" tập trung",
        content: "<p>Trong kiến trúc mạng truyền thống, mỗi thiết bị hoạt động như một cá thể độc lập với \"bộ não\" (Control Plane) riêng biệt. Quy trình quản trị phân tán này yêu cầu kỹ sư phải SSH vào từng thiết bị để cấu hình – một rào cản lớn về tốc độ và là \"mảnh đất màu mỡ\" cho lỗi con người.</p><p>Cuộc cách mạng <strong>SDN (Software-Defined Networking)</strong> đã phá vỡ rào cản này bằng cách tách rời hoàn toàn <strong>Control Plane</strong> (Mặt phẳng điều hành) khỏi <strong>Data Plane</strong> (Mặt phẳng dữ liệu). Toàn bộ quyền kiểm soát được tập trung về một máy chủ trung tâm gọi là SDN Controller (ví dụ như Cisco DNA Center). Để thực hiện điều này, kiến trúc SDN sử dụng các giao diện lập trình chuyên biệt:</p><ul><li><strong>Southbound API:</strong> Là ngôn ngữ để Controller ra lệnh cho các thiết bị vật lý bên dưới (qua các giao thức như NETCONF hoặc SNMP).</li><li><strong>Northbound API:</strong> Là cầu nối để Controller giao tiếp với các ứng dụng doanh nghiệp (thường qua REST API), giúp mạng lưới hiểu và thực thi các mục tiêu kinh doanh.</li></ul><blockquote>\"SDN Controller đóng vai trò là bộ não trung tâm, ra lệnh cho các thiết bị Switch bên dưới – vốn chỉ còn là những cỗ máy chuyển tiếp 'ngu ngốc' (dumb switches) – phải xử lý dữ liệu như thế nào thông qua các giao diện lập trình.\"</blockquote><p>Lợi ích của SDN không chỉ là quản trị từ một giao diện duy nhất mà còn là khả năng tối ưu hóa chi phí vận hành (OPEX) và rút ngắn thời gian đưa sản phẩm ra thị trường (Time-to-market) cho doanh nghiệp.</p>"
    },
    {
        title: "3. TCP vs UDP - Sự đánh đổi giữa \"Chính xác tuyệt đối\" và \"Tốc độ tức thì\"",
        content: "<p>Ở Lớp Giao vận (Layer 4), mọi quyết định kiến trúc đều xoay quanh sự đánh đổi giữa độ tin cậy và hiệu suất.</p><ul><li><strong>TCP (Transmission Control Protocol):</strong> Giống như việc gửi một bức thư đảm bảo. Nó yêu cầu quy trình \"bắt tay 3 bước\" (SYN, SYN-ACK, ACK) để thiết lập kết nối. Với <strong>Header lớn (20 bytes)</strong>, TCP mang theo gánh nặng của các cơ chế kiểm tra lỗi và xác nhận (ACK). Nếu dữ liệu mất, nó sẽ gửi lại cho đến khi chính xác tuyệt đối.</li><li><strong>UDP (User Datagram Protocol):</strong> Giống như một cuộc gọi điện thoại trực tiếp. Hoạt động theo nguyên tắc \"Fire and Forget\" (Gửi và Quên), UDP không cần thiết lập kết nối và có <strong>Header cực nhẹ (chỉ 8 bytes)</strong>. Sự tinh giản này giúp giảm thiểu tối đa \"overhead\" (chi phí tài nguyên), mang lại tốc độ truyền tải vượt trội.</li></ul><p><strong>Ứng dụng thực tế:</strong></p><ul><li><strong>TCP:</strong> Sử dụng cho Web (HTTP/HTTPS), Email (SMTP), Truyền file (FTP) – những nơi mà sai lệch một bit dữ liệu cũng có thể làm hỏng toàn bộ nội dung.</li><li><strong>UDP:</strong> Sử dụng cho Voice IP, Video Call, Game Online.</li></ul><p>Trong thế giới kỹ thuật số, việc mất mát vài khung hình (UDP) là cái giá chấp nhận được để duy trì sự mượt mà. Một âm thanh bị trễ 2 giây do TCP cố gắng gửi lại sẽ trở nên vô nghĩa trong một cuộc hội thoại trực tiếp.</p>"
    },
    {
        title: "4. Spine-Leaf - Kiến trúc \"một bước nhảy\" trong Trung tâm dữ liệu",
        content: "<p>Khi các ứng dụng đám mây bùng nổ, mô hình 3 lớp truyền thống (Core-Distribution-Access) trở nên hụt hơi trước lưu lượng <strong>East-West traffic</strong> (lưu lượng trao đổi ngang hàng giữa các máy chủ trong nội bộ Data Center). Kiến trúc <strong>Spine-Leaf</strong> ra đời như một \"bộ khung\" (fabric) hiện đại cho Cloud.</p><p>Trong mô hình này, mọi thiết bị <strong>Leaf</strong> (kết nối máy chủ) đều được đấu nối trực tiếp vào mọi thiết bị <strong>Spine</strong> (lõi trung tâm). Quy hoạch này đảm bảo mọi luồng dữ liệu giữa các máy chủ luôn chỉ đi qua đúng <strong>1 hop</strong> (trạm trung chuyển). Việc loại bỏ các bước trung gian không cần thiết giúp giảm độ trễ xuống mức cực thấp và cho phép băng thông mở rộng theo quy quy mô ngang (Scale-out) một cách dễ dàng, đáp ứng nhu cầu khắt khe của các hệ thống ảo hóa hiện đại.</p>"
    },
    {
        title: "5. Bảo mật không chỉ là Tường lửa (Layer 2 Security)",
        content: "<p>Một sai lầm kinh điển của nhiều doanh nghiệp là chỉ tập trung xây \"tường cao, cổng kín\" với Firewall ở cửa ngõ mà bỏ trống \"sân nhà\" mạng LAN. Như một quy tắc vàng trong ngành:</p><blockquote>\"Nếu một kẻ tấn công có thể chạm tay vật lý vào thiết bị của bạn, nó không còn là thiết bị của bạn nữa.\"</blockquote><p>Các mối đe dọa bên trong như <strong>DHCP Spoofing</strong> (giả mạo máy chủ cấp IP) hay <strong>ARP Spoofing</strong> (đánh cắp danh tính Router) có thể làm tê liệt hệ thống từ bên trong. Để bảo vệ mạng từ cổng cắm vật lý, chúng ta cần triển khai các lớp phòng vệ:</p><ul><li><strong>DHCP Snooping:</strong> Kỹ thuật này chia cổng Switch thành <strong>Trusted Port</strong> (Cổng tin cậy - nối với máy chủ DHCP thật) và <strong>Untrusted Port</strong> (Cổng không tin cậy - nối với người dùng). Mọi bản tin cấp IP giả mạo từ cổng không tin cậy sẽ bị chặn đứng ngay lập tức.</li><li><strong>Dynamic ARP Inspection (DAI):</strong> Kiểm tra tính hợp lệ của các bản tin ARP dựa trên cơ sở dữ liệu từ DHCP Snooping để ngăn chặn các cuộc tấn công nghe lén (Man-in-the-Middle).</li><li><strong>Port Security:</strong> Giới hạn địa chỉ MAC được phép truy cập, đảm bảo chỉ thiết bị hợp lệ mới có thể \"nói chuyện\" với mạng.</li></ul><p>Tư duy bảo mật hiện đại là <strong>\"Tin tưởng nhưng phải xác minh\"</strong> (Trust but Verify) ngay từ những kết nối vật lý đầu tiên.</p>"
    },
    {
        title: "6. Tương lai của Kỹ sư mạng - Từ \"Gõ lệnh\" đến \"Lập trình\"",
        content: "<p>Kỷ nguyên của việc gõ từng dòng lệnh CLI thủ công đang lùi xa, nhường chỗ cho API và tự động hóa. Kỹ sư mạng hiện đại phải tư duy như một lập trình viên, sử dụng các công cụ mạnh mẽ để quản trị hệ thống ở quy mô hàng ngàn thiết bị:</p><ul><li><strong>REST API & CRUD:</strong> Đây là ngôn ngữ giao tiếp tiêu chuẩn. Việc quản lý cấu hình mạng giờ đây được thực hiện qua các phương thức HTTP tương ứng với chu trình <strong>CRUD</strong>:<ul><li><strong>POST</strong> (Create - Tạo mới cấu hình)</li><li><strong>GET</strong> (Read - Đọc dữ liệu)</li><li><strong>PUT/PATCH</strong> (Update - Cập nhật thay đổi)</li><li><strong>DELETE</strong> (Delete - Xóa bỏ)</li></ul></li><li><strong>JSON:</strong> Định dạng dữ liệu chuẩn với các cặp \"Key-Value\", giúp máy tính trao đổi thông tin nhanh chóng và con người cũng có thể dễ dàng đọc hiểu.</li><li><strong>Ansible:</strong> Công cụ quản lý cấu hình theo cơ chế <strong>Agentless</strong> (không cần cài phần mềm lên thiết bị mạng), cho phép đẩy cấu hình đồng loạt qua các kịch bản (Playbooks), loại bỏ hoàn toàn lỗi chủ quan từ con người.</li></ul>"
    }
];

// Cấu trúc Bài học (Trang con 1 & 2)
const courseStructure = [
    {
        partId: "part1",
        title: "Phần 1: Nền tảng về mạng (Network Fundamentals)",
        desc: "Đây là phần giới thiệu các khái niệm cơ bản nhất về cách các thiết bị giao tiếp với nhau.",
        lessons: [
            { id: "1.1", name: "1.1 Vai trò và chức năng của các thiết bị mạng", content: "<p>Mỗi thiết bị trong mạng đóng một vai trò chuyên biệt để đảm bảo luồng dữ liệu được truyền đi chính xác, an toàn và hiệu quả.</p><h3>Bộ định tuyến (Routers):</h3><ul><li>Hoạt động ở <strong>Lớp 3 (Network Layer)</strong> của mô hình OSI.</li><li><strong>Chức năng chính:</strong> Kết nối các mạng (Networks) khác nhau lại với nhau (ví dụ: kết nối mạng LAN của công ty với Internet). Router đọc địa chỉ IP đích của gói tin, tra cứu bảng định tuyến (Routing Table) và quyết định đường đi tốt nhất (Best Path) để chuyển tiếp gói tin.</li><li>Router chia cắt các miền quảng bá (Broadcast Domain), giúp giảm thiểu rác mạng.</li></ul><h3>Switch Lớp 2 (L2 Switches):</h3><ul><li>Hoạt động ở <strong>Lớp 2 (Data Link Layer)</strong>.</li><li><strong>Chức năng chính:</strong> Kết nối các thiết bị đầu cuối (PC, máy in, server) trong cùng một mạng LAN. L2 Switch chuyển tiếp khung dữ liệu (Frames) dựa trên địa chỉ MAC (MAC Address).</li><li>Nó học địa chỉ MAC và lưu vào bảng CAM (MAC Address Table) để gửi dữ liệu chính xác đến cổng của thiết bị nhận, thay vì gửi đến tất cả các cổng (như Hub ngày xưa).</li></ul><h3>Switch Lớp 3 (L3 Switches / Multilayer Switches):</h3><ul><li>Là sự kết hợp giữa Switch Lớp 2 và Router.</li><li><strong>Chức năng chính:</strong> Vừa có khả năng chuyển mạch tốc độ cao dựa trên MAC address, vừa có khả năng định tuyến (Routing) giữa các VLAN (Virtual LAN) dựa trên địa chỉ IP. L3 Switch thường được dùng làm thiết bị trung tâm (Core/Distribution) trong mạng nội bộ.</li></ul><h3>Tường lửa (Firewalls):</h3><ul><li><strong>Chức năng chính:</strong> Kiểm soát luồng giao thông vào/ra mạng dựa trên các bộ quy tắc bảo mật (Security Rules/Policies).</li><li>Firewall hiện đại (Next-Generation Firewall - NGFW) không chỉ lọc theo IP/Port mà còn có thể kiểm tra sâu vào nội dung gói tin (Deep Packet Inspection), ngăn chặn mã độc (Malware), và nhận diện ứng dụng (Application Visibility).</li></ul><h3>Điểm truy cập không dây (Access Points - APs):</h3><ul><li><strong>Chức năng chính:</strong> Mở rộng kết nối mạng có dây thành mạng không dây (Wi-Fi), cho phép các thiết bị di động (laptop, smartphone) truy cập vào mạng LAN bằng sóng vô tuyến (RF).</li></ul><h3>Bộ điều khiển (Controllers - WLC, DNA Center):</h3><ul><li>Trong mạng quy mô lớn, việc cấu hình từng AP hoặc Switch là bất khả thi.</li><li><strong>WLC (Wireless LAN Controller):</strong> Quản lý tập trung hàng chục đến hàng ngàn AP. Bạn chỉ cần cấu hình trên WLC, các chính sách sẽ tự động đẩy xuống AP.</li><li><strong>Cisco DNA Center:</strong> Bộ điều khiển kiến trúc mạng hiện đại (SDN - Software Defined Networking), cho phép quản lý, tự động hóa và phân tích toàn bộ hệ thống mạng từ một giao diện duy nhất.</li></ul>" },
            { id: "1.2", name: "1.2 Các mô hình kiến trúc mạng", content: "<p>Kiến trúc mạng quyết định cách các thiết bị được đấu nối vật lý và logic để đảm bảo tính sẵn sàng cao, dễ mở rộng và dễ quản lý.</p><ul><li><strong>Mô hình 3 lớp (3-Tier Architecture):</strong> Phổ biến nhất trong doanh nghiệp lớn, chia mạng thành 3 lớp rõ rệt:<ul><li><strong>Core Layer (Lớp Lõi):</strong> Cột sống của mạng. Tập trung vào tốc độ cực cao, chuyển tiếp dữ liệu nhanh nhất có thể. Không cấu hình các chính sách lọc ở đây.</li><li><strong>Distribution Layer (Lớp Phân phối):</strong> Nơi gom kết nối từ các Access Layer. Thực hiện định tuyến giữa các VLAN, áp dụng Access Control Lists (ACLs) và QoS.</li><li><strong>Access Layer (Lớp Truy cập):</strong> Nơi các thiết bị đầu cuối (PC, IP Phone) cắm dây trực tiếp vào mạng. Tập trung vào bảo mật cổng (Port Security) và cấp nguồn qua mạng (PoE).</li></ul></li><li><strong>Mô hình 2 lớp (Collapsed Core / 2-Tier):</strong> Dành cho doanh nghiệp vừa và nhỏ. Lớp Core và Distribution được gộp chung vào một thiết bị (thường là Switch L3 mạnh) để tiết kiệm chi phí nhưng vẫn giữ được hiệu năng tốt.</li><li><strong>Mô hình Spine-Leaf:</strong><ul><li>Chuẩn mực cho <strong>Data Center (Trung tâm dữ liệu)</strong> hiện đại. Khắc phục độ trễ của mô hình 3 lớp.</li><li>Mọi thiết bị Leaf (Switch kết nối với Server) đều kết nối trực tiếp với mọi thiết bị Spine (Switch trung tâm). Đảm bảo dữ liệu từ Server A sang Server B luôn chỉ đi qua đúng 1 trạm trung chuyển (1 hop), mang lại độ trễ cực thấp và băng thông cực lớn (East-West traffic).</li></ul></li><li><strong>Mạng diện rộng (WAN):</strong> Kiến trúc kết nối các chi nhánh địa lý xa nhau. Thường sử dụng các kết nối thuê bao từ nhà mạng (ISP) như MPLS, Metro Ethernet, hoặc hiện đại nhất là SD-WAN (định tuyến thông minh dựa trên phần mềm qua Internet/4G).</li><li><strong>SOHO (Small Office / Home Office):</strong> Mạng gia đình hoặc văn phòng nhỏ. Thường sử dụng thiết bị \"All-in-one\" (Wireless Router) – một thiết bị nhỏ gọn đóng vai trò vừa là Router định tuyến ra Internet, vừa là Switch chia cổng LAN, vừa là Firewall cơ bản, và là Access Point phát Wi-Fi.</li></ul>" },
            { id: "1.3", name: "1.3 Các loại cáp mạng và cổng kết nối", content: "<p>Tín hiệu cần môi trường vật lý để truyền dẫn. Có ba khía cạnh chính bạn cần nắm:</p><ul><li><strong>Cáp đồng (Copper Cables - UTP/STP):</strong><ul><li>Truyền tín hiệu bằng xung điện. Sử dụng đầu nối RJ-45.</li><li>Các chuẩn phổ biến: Cat5e (1 Gbps), Cat6 (1-10 Gbps), Cat6a (10 Gbps).</li><li><strong>Giới hạn:</strong> Khoảng cách tối đa là <strong>100 mét</strong> cho một đoạn cáp. Rất dễ bị nhiễu điện từ (EMI) nếu không bọc chống nhiễu (STP).</li></ul></li><li><strong>Cáp quang (Fiber Optic):</strong><ul><li>Truyền tín hiệu bằng ánh sáng. Hoàn toàn miễn nhiễm với nhiễu điện từ, không bị suy hao nhiều.</li><li><strong>Single-mode (SMF):</strong> Lõi cực nhỏ (9 micron), dùng tia Laser để truyền đi khoảng cách cực xa (hàng chục đến hàng trăm kilomet). Thường dùng nối giữa các thành phố hoặc lục địa.</li><li><strong>Multi-mode (MMF):</strong> Lõi lớn hơn (50 hoặc 62.5 micron), dùng đèn LED, truyền khoảng cách ngắn hơn (khoảng 300 - 550 mét). Thường dùng trong tòa nhà hoặc Data Center.</li></ul></li><li><strong>PoE (Power over Ethernet):</strong><ul><li>Công nghệ tuyệt vời cho phép sợi cáp đồng (UTP) vừa truyền dữ liệu mạng, vừa cấp điện năng cho thiết bị đích.</li><li>Ứng dụng: Cấp điện cho Access Point, IP Phone, Camera giám sát mà không cần kéo thêm dây điện rời.</li><li>Các chuẩn: 802.3af (15.4W), 802.3at (PoE+ 30W), 802.3bt (UPoE/PoE++ lên đến 60W-90W).</li></ul></li></ul>" },
            { id: "1.4", name: "1.4 Phân biệt TCP và UDP", content: "<p>Lớp Giao vận (Transport Layer - Layer 4) có hai giao thức cốt lõi. Hiểu sự khác biệt này là bắt buộc trong mạng.</p><table border='1' cellpadding='10' style='border-collapse: collapse; width:100%; margin-bottom:15px;'><tr><th>Đặc điểm</th><th>TCP</th><th>UDP</th></tr><tr><td>Tính chất</td><td>Hướng kết nối (Connection-oriented)</td><td>Phi kết nối (Connectionless)</td></tr><tr><td>Độ tin cậy</td><td>Cao. Có cơ chế xác nhận (ACK).</td><td>Thấp. (Fire and Forget).</td></tr><tr><td>Thiết lập</td><td>Cần bắt tay 3 bước.</td><td>Không cần thiết lập.</td></tr><tr><td>Tốc độ</td><td>Chậm hơn, Header lớn (20 bytes).</td><td>Rất nhanh, Header nhỏ gọn (8 bytes).</td></tr><tr><td>Ứng dụng</td><td>Web, Email, FTP.</td><td>Voice IP, Video Call, Game.</td></tr></table>" },
            { id: "1.5", name: "1.5 Cấu hình và xác minh địa chỉ IPv4", content: "<p>IPv4 là giao thức định danh thiết bị trên mạng Internet và mạng nội bộ.</p><ul><li><strong>Cấu trúc IPv4:</strong> Dài <strong>32 bit</strong>, chia làm 4 Octet, biểu diễn dưới dạng số thập phân. Bao gồm <strong>Network portion</strong> và <strong>Host portion</strong>. Subnet Mask được dùng để phân định.</li><li><strong>Private vs Public IPv4:</strong><ul><li><strong>Public IP:</strong> Phải mua, độc nhất trên toàn cầu, dùng để ra Internet.</li><li><strong>Private IP:</strong> Dùng miễn phí trong mạng nội bộ (LAN). Cần dùng NAT để chuyển đổi sang Public IP.</li></ul></li><li><strong>Chia mạng con (Subnetting):</strong> Hành động \"mượn\" các bit của phần Host chuyển thành phần Network. Lợi ích: Tối ưu hóa không gian IP, thu hẹp vùng Broadcast.</li><li><strong>VLSM (Variable Length Subnet Mask):</strong> Kỹ thuật \"chia mạng con của mạng con\", cho phép cắt các dải IP vừa khít với số lượng máy thực tế.</li></ul>" },
            { id: "1.6", name: "1.6 Cấu hình và xác minh địa chỉ IPv6", content: "<p>Kho IP mặt đất (IPv4) đã cạn kiệt, IPv6 ra đời để giải quyết triệt để vấn đề này.</p><ul><li><strong>Cấu trúc IPv6:</strong> Dài <strong>128 bit</strong>, biểu diễn bằng hệ Thập lục phân (Hexadecimal), cách nhau bởi dấu hai chấm.</li><li><strong>Hoạt động khác biệt:</strong> KHÔNG có Broadcast. Thay vào đó là Multicast và Anycast. Không cần NAT. Header đơn giản hơn.</li><li><strong>Các loại địa chỉ:</strong><ul><li><strong>Global Unicast Address (GUA):</strong> Tương đương Public IP.</li><li><strong>Link-Local Address:</strong> Tự động sinh ra (FE80::/10), dùng để giao tiếp trong 1 phân đoạn mạng.</li><li><strong>Unique Local Address (ULA):</strong> Tương đương Private IP (FC00::/7).</li></ul></li><li><strong>SLAAC:</strong> Thiết bị tự động hỏi Router và tự tạo ra địa chỉ IPv6 mà không cần DHCP tĩnh.</li></ul>" },
            { id: "1.7", name: "1.7 Nguyên lý cơ bản của mạng không dây", content: "<p>Mạng không dây (Wireless) sử dụng sóng vô tuyến (RF - Radio Frequency) làm môi trường truyền dẫn thay vì dây cáp.</p><ul><li><strong>Băng tần:</strong> <ul><li><strong>2.4 GHz:</strong> Xuyên tường tốt, phủ sóng xa, tốc độ chậm, dễ nhiễu, 3 kênh không chồng lấn.</li><li><strong>5 GHz:</strong> Tốc độ nhanh, ít nhiễu, phủ sóng hẹp, xuyên tường kém.</li></ul></li><li><strong>SSID (Service Set Identifier):</strong> Tên của mạng Wi-Fi.</li><li><strong>BSS và ESS:</strong> BSS là vùng phủ sóng của MỘT AP. ESS là nhiều AP cùng phát chung SSID để tự động chuyển vùng (Roaming).</li></ul>" },
            { id: "1.8", name: "1.8 Các nguyên lý ảo hóa", content: "<p>Ngày nay, phần cứng (phần mạng cũng như máy chủ) đều hướng tới việc ảo hóa để tối ưu tài nguyên.</p><ul><li><strong>Ảo hóa (Virtualization):</strong> Là công nghệ cho phép tạo ra nhiều phiên bản máy tính ảo (Virtual Machines - VMs) chạy đồng thời trên cùng một máy chủ vật lý duy nhất.</li><li><strong>Hypervisor:</strong> Phần mềm lõi quản lý tài nguyên máy vật lý cho máy ảo.<ul><li><strong>Type 1 (Bare Metal):</strong> Cài trực tiếp lên phần cứng (ESXi, Hyper-V).</li><li><strong>Type 2 (Hosted):</strong> Cài lên Hệ điều hành có sẵn (VMware Workstation).</li></ul></li><li><strong>Thành phần mạng ảo:</strong> Máy ảo giao tiếp bằng Card mạng ảo (vNIC), kết nối vào Switch ảo (vSwitch).</li></ul>" }
        ]
    },
    {
        partId: "part2",
        title: "Phần 2: Truy cập mạng (Network Access)",
        desc: "Tập trung vào các công nghệ chuyển mạch (Switching) ở Layer 2 và mạng không dây.",
        lessons: [
            { id: "2.1", name: "2.1 Cấu hình và xác minh VLANs", content: "<p>Trong một mạng LAN truyền thống, tất cả thiết bị kết nối vào Switch đều nằm trong cùng một miền quảng bá (Broadcast Domain). VLAN chia một Switch vật lý thành nhiều Switch logic nhỏ hơn. Mỗi VLAN là một miền Broadcast riêng biệt.</p><p><strong>Lợi ích:</strong> Bảo mật, Hiệu suất, Tính linh hoạt.</p><ul><li><strong>Access Port:</strong> Nối trực tiếp thiết bị đầu cuối, chỉ thuộc về một VLAN.</li><li><strong>Trunk Port:</strong> Nối Switch-Switch/Router, cho phép nhiều VLAN đi qua.</li></ul><p><strong>Giao thức 802.1Q:</strong> Đóng dấu (Tagging) VLAN Tag 4-byte vào Frame. <strong>Native VLAN:</strong> Dữ liệu Untagged đi qua Trunk tự động gán vào Native VLAN.</p>" },
            { id: "2.2", name: "2.2 Chuyển mạch và giao thức Spanning Tree", content: "<p>Kết nối vòng tròn vật lý ở Lớp 2 gây ra Loop, dẫn đến Broadcast Storm và lỗi bảng MAC.</p><p><strong>STP (802.1D):</strong> Chặn vòng lặp logic. Bầu chọn Root Bridge -> Chọn Root Port -> Chọn Designated Port -> Khóa cổng dư thừa.</p><p><strong>RSTP (802.1w):</strong> Phục hồi nhanh dưới 1 giây. Các trạng thái: Discarding, Learning, Forwarding.</p>" },
            { id: "2.3", name: "2.3 Cấu hình EtherChannel (LACP)", content: "<p>Gộp nhiều đường liên kết vật lý thành một đường liên kết logic duy nhất.</p><p><strong>Lợi ích:</strong> Tăng băng thông (không bị STP khóa), Dự phòng mượt mà, Cân bằng tải.</p><p><strong>LACP (802.3ad):</strong> Giao thức chuẩn. Chế độ Active (chủ động mời) và Passive (bị động chờ).</p>" },
            { id: "2.4", name: "2.4 Khám phá thiết bị láng giềng (CDP và LLDP)", content: "<p>Giúp thiết bị tự giới thiệu bản thân.</p><ul><li><strong>CDP:</strong> Độc quyền Cisco, mặc định bật.</li><li><strong>LLDP:</strong> Chuẩn mở 802.1AB, đa hãng, mặc định thường tắt.</li></ul><p><em>Lưu ý:</em> Tắt CDP/LLDP trên cổng Access để bảo mật.</p>" },
            { id: "2.5", name: "2.5 Kiến trúc mạng không dây của Cisco", content: "<p><strong>1. Kiến trúc Độc lập:</strong> Mỗi AP tự quản lý cấu hình, mã hóa. Nhược điểm: Khó quản lý diện rộng, Roaming kém.</p><p><strong>2. Kiến trúc Quản lý tập trung:</strong> WLC đóng vai trò bộ脑, LAP chỉ làm nhiệm vụ phát sóng vô tuyến. Thiết lập đường hầm CAPWAP đẩy dữ liệu về WLC.</p>" }
        ]
    },
    {
        partId: "part3",
        title: "Phần 3: Kết nối IP (IP Connectivity)",
        desc: "Phần này đi sâu vào định tuyến (Routing) ở Layer 3 để các mạng khác nhau có thể kết nối.",
        lessons: [
            { id: "3.1", name: "3.1 Bảng định tuyến hoạt động như thế nào", content: "<p>Bảng định tuyến là bộ não của Router. Khi gói tin IP đi vào, Router đọc IP đích, tra cứu bảng và quyết định đường đi (Best Path) qua cổng thoát (Exit Interface) hoặc IP trạm kế (Next-hop).</p><p><strong>Nguồn gốc đường đi:</strong></p><ul><li>Directly Connected (C / L)</li><li>Static Routes (S)</li><li>Dynamic Routing Protocols (O, D, R, B)</li></ul>" },
            { id: "3.2", name: "3.2 Quyết định chuyển tiếp gói tin", content: "<p>Router tuân thủ quy trình:</p><ol><li><strong>Longest Match Rule:</strong> Ưu tiên đường đi cụ thể nhất (Subnet Mask lớn nhất).</li><li><strong>Administrative Distance (AD):</strong> Nếu độ khớp bằng nhau, xét nguồn gốc (AD thấp hơn thì tin cậy hơn, VD: Connected=0, Static=1, OSPF=110).</li><li><strong>Metric:</strong> Nếu cùng AD, xét chi phí đường truyền thấp nhất.</li></ol>" },
            { id: "3.3", name: "3.3 Cấu hình định tuyến tĩnh", content: "<p>Cấu hình thủ công. Bảo mật cao nhưng khó mở rộng.</p><p><strong>Định tuyến tĩnh chuẩn:</strong> <code>ip route [Mạng đích] [Mask] [Next-hop]</code>.</p><p><strong>Tuyến mặc định (Default Route):</strong> <code>ip route 0.0.0.0 0.0.0.0 [Next-hop]</code> - Đường đi cuối cùng ra Internet.</p>" },
            { id: "3.4", name: "3.4 Cấu hình định tuyến động OSPFv2", content: "<p><strong>OSPFv2:</strong> Giao thức Link-State, dùng thuật toán Dijkstra, tính Cost dựa trên Băng thông. Cấu hình chia theo Area (VD: Area 0).</p><p>Lệnh cấu hình: <code>router ospf 1</code>, <code>router-id</code>, <code>network [IP] [Wildcard] area 0</code>. Lệnh <code>passive-interface</code> để bảo mật mạng LAN.</p>" },
            { id: "3.5", name: "3.5 Giao thức dự phòng Default Gateway (HSRP)", content: "<p><strong>HSRP (FHRP):</strong> Dùng nhiều Router tạo ra một Virtual Router có Virtual IP và Virtual MAC. Máy tính trỏ Default Gateway vào Virtual IP. Bầu chọn Active Router và Standby Router dựa trên Priority. Tính năng Preempt cho phép giành lại quyền.</p>" }
        ]
    },
    {
        partId: "part4",
        title: "Phần 4: Các dịch vụ IP (IP Services)",
        desc: "Các dịch vụ hỗ trợ và duy trì hoạt động của mạng.",
        lessons: [
            { id: "4.1", name: "4.1 Cấu hình và xác minh NAT", content: "<p>NAT dịch địa chỉ Private IP thành Public IP để ra Internet.</p><ul><li><strong>Static NAT:</strong> Dịch 1 đổi 1 tĩnh, dùng cho Server.</li><li><strong>Dynamic NAT:</strong> Bể địa chỉ ngẫu nhiên.</li><li><strong>PAT (NAT Overload):</strong> Phổ biến nhất, hàng ngàn IP Private dùng chung 1 IP Public, phân biệt bằng Port Number Lớp 4.</li></ul>" },
            { id: "4.2", name: "4.2 Cấu hình NTP", content: "<p>NTP (UDP 123) đồng bộ thời gian thiết bị mạng. Tránh lỗi Log và lỗi chứng chỉ bảo mật. Hoạt động theo kiến trúc hình tháp Stratum (Stratum 0: GPS, Stratum 1: NTP Server).</p>" },
            { id: "4.3", name: "4.3 Vai trò của DHCP và DNS", content: "<p><strong>DHCP (UDP 67/68):</strong> Tự động cấp IP qua 4 bước D.O.R.A (Discover, Offer, Request, Acknowledge).</p><p><strong>DNS (UDP 53):</strong> Danh bạ Internet, phân giải Tên miền (Domain) sang địa chỉ IP để duyệt web.</p>" },
            { id: "4.4", name: "4.4 Giám sát thiết bị với SNMP, Syslog", content: "<p><strong>Syslog (UDP 514):</strong> Đẩy nhật ký sự kiện về Server trung tâm, phân mức Level 0-7 (Emergencies -> Debugging).</p><p><strong>SNMP (UDP 161/162):</strong> Gồm Manager, Agent, MIB. Khuyến cáo dùng SNMPv3 vì có Mã hóa và Xác thực.</p>" },
            { id: "4.5", name: "4.5 Quản lý cấu hình qua TFTP/FTP", content: "<p><strong>TFTP (UDP 69):</strong> Đơn giản, siêu nhẹ, không cần tài khoản, độ bảo mật thấp (dùng LAN nội bộ).</p><p><strong>FTP (TCP 20/21):</strong> Đáng tin cậy hơn, có xác thực Username/Password.</p>" },
            { id: "4.6", name: "4.6 Nguyên lý QoS", content: "<p>QoS ưu tiên lưu lượng mạng quan trọng (như Voice, Video) khi nghẽn mạch.</p><ol><li><strong>Phân loại (Classification):</strong> Nhận diện gói tin qua ACL/Port.</li><li><strong>Đánh dấu (Marking):</strong> Dán nhãn DSCP (Lớp 3) hoặc CoS (Lớp 2). Gói thoại được gắn EF (46).</li><li><strong>Quản lý hàng đợi (Queuing):</strong> Đẩy gói EF vào Priority Queue ra trước tiên để giảm trễ.</li></ol>" }
        ]
    },
    {
        partId: "part5",
        title: "Phần 5: Nền tảng Bảo mật (Security)",
        desc: "Cung cấp kiến thức để bảo vệ hệ thống mạng.",
        lessons: [
            { id: "5.1", name: "5.1 Các khái niệm bảo mật cốt lõi", content: "<ul><li><strong>Vulnerability:</strong> Lỗ hổng, điểm yếu hệ thống.</li><li><strong>Threat:</strong> Mối đe dọa (Hacker, Malware).</li><li><strong>Exploit:</strong> Khai thác lỗ hổng.</li><li><strong>Mitigation:</strong> Biện pháp giảm nhẹ (Firewall, Patching).</li></ul>" },
            { id: "5.2", name: "5.2 Kiểm soát truy cập vật lý và mật khẩu", content: "<p>Phải khóa tủ rack, quản lý thẻ từ, vô hiệu hóa cổng mạng sảnh chờ. Mật khẩu phức tạp, dùng lệnh <code>enable secret</code> để băm mật khẩu trên thiết bị Cisco.</p>" },
            { id: "5.3", name: "5.3 Các khái niệm về VPN", content: "<p>VPN tạo đường hầm ảo mã hóa qua Internet.</p><ul><li><strong>Site-to-Site VPN:</strong> Kết nối chi nhánh (dùng IPsec).</li><li><strong>Remote Access VPN:</strong> Nhân viên truy cập từ xa (dùng SSL/TLS).</li></ul>" },
            { id: "5.4", name: "5.4 Cấu hình và xác minh ACLs", content: "<p><strong>Standard ACL (1-99):</strong> Chỉ lọc IP nguồn, đặt gần Đích. <br><strong>Extended ACL (100-199):</strong> Lọc IP nguồn, đích, giao thức, cổng, đặt gần Nguồn.</p><p>Luôn đọc từ trên xuống (Top-Down) và có luật cấm ngầm định (Implicit Deny) ở cuối.</p>" },
            { id: "5.5", name: "5.5 Các tính năng bảo mật Layer 2", content: "<ul><li><strong>Port Security:</strong> Khóa số lượng địa chỉ MAC hợp lệ trên cổng.</li><li><strong>DHCP Snooping:</strong> Chống DHCP giả mạo, chia Trusted và Untrusted Ports.</li><li><strong>DAI:</strong> Dựa vào DHCP Snooping để chặn các bản tin ARP Spoofing lừa đảo.</li></ul>" },
            { id: "5.6", name: "5.6 Các giao thức AAA", content: "<p>AAA quản lý tập trung: Authentication (Xác thực), Authorization (Cấp quyền), Accounting (Ghi nhận).</p><p><strong>TACACS+:</strong> TCP 49, độc quyền Cisco, mã hóa toàn bộ, dùng cho Device Admin.</p><p><strong>RADIUS:</strong> UDP 1812/1813, chuẩn mở, mã hóa Password, dùng cho Network Access.</p>" },
            { id: "5.7", name: "5.7 Bảo mật mạng không dây", content: "<p><strong>WPA2:</strong> Dùng mã hóa AES. Gồm Personal (PSK) và Enterprise (802.1X kết hợp RADIUS).</p><p><strong>WPA3:</strong> Khắc phục lỗ hổng KRACK bằng giao thức SAE, chống dò mật khẩu Offline.</p>" }
        ]
    },
    {
        partId: "part6",
        title: "Phần 6: Tự động hóa và Lập trình hóa",
        desc: "Xu hướng tự động hóa trong quản trị mạng hiện đại.",
        lessons: [
            { id: "6.1", name: "6.1 SDN vs Mạng truyền thống", content: "<p>Mạng truyền thống mỗi thiết bị tự xử lý Control Plane phân tán. SDN tách rời Control Plane, tập trung về SDN Controller, biến Switch vật lý thành dumb switches chỉ còn Data Plane.</p>" },
            { id: "6.2", name: "6.2 Kiến trúc Cisco DNA Center", content: "<p>DNA Center là SDN Controller hoạt động dựa trên Mạng dựa trên ý định (IBN). Dùng Southbound API giao tiếp thiết bị vật lý, Northbound API giao tiếp ứng dụng bên trên. Gồm 4 tính năng: Design, Policy, Provision, Assurance.</p>" },
            { id: "6.3", name: "6.3 REST-based APIs", content: "<p>CRUD tương ứng HTTP Verbs: POST (Create), GET (Read), PUT/PATCH (Update), DELETE (Delete).</p><p>Status Codes: 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Server Error.</p>" },
            { id: "6.4", name: "6.4 Định dạng dữ liệu JSON", content: "<p>JSON dễ đọc, dựa trên cặp \"Key\": \"Value\". Dùng <code>{}</code> cho Object, <code>[]</code> cho Array. Khóa phải bọc trong ngoặc kép.</p>" },
            { id: "6.5", name: "6.5 Các công cụ quản lý cấu hình", content: "<ul><li><strong>Ansible:</strong> Agentless, dùng YAML (Playbooks), mô hình Push. Phổ biến nhất ngành Mạng.</li><li><strong>Puppet:</strong> Cần Agent, dùng Ruby (Manifests), mô hình Pull.</li><li><strong>Chef:</strong> Cần Agent, dùng Ruby (Recipes/Cookbooks), mô hình Pull.</li></ul>" }
        ]
    }
];

// Khởi tạo hiển thị Trang chủ (Dashboard)
const dashboardGrid = document.getElementById("intro-dashboard");
introData.forEach((item, index) => {
    let card = document.createElement("div");
    card.className = "dash-card";
    card.innerHTML = `<h3>${item.title}</h3>`;
    card.addEventListener("click", () => openModal(item.title, item.content));
    dashboardGrid.appendChild(card);
});

// Xử lý Modal
const modal = document.getElementById("intro-modal");
const closeBtn = document.querySelector(".close-btn");
function openModal(title, content) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-body").innerHTML = content;
    modal.style.display = "block";
}
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };

// Render Accordion Trang con 1 & Xử lý hiển thị Trang con 2
const courseAccordion = document.getElementById("course-accordion");
const lessonView = document.getElementById("lesson-view");

courseStructure.forEach((part, index) => {
    // Tạo Header phần
    let accItem = document.createElement("div");
    accItem.className = "acc-item";
    
    let accHeader = document.createElement("button");
    accHeader.className = "acc-header";
    accHeader.innerHTML = `${part.title}`;
    
    // Tạo Body danh sách bài học (Hiển thị dạng cột dọc khi click)
    let accBody = document.createElement("div");
    accBody.className = "acc-body";
    
    let desc = document.createElement("p");
    desc.style.padding = "0 20px 10px";
    desc.style.fontSize = "0.9rem";
    desc.innerText = part.desc;
    accBody.appendChild(desc);

    part.lessons.forEach(lesson => {
        let lLink = document.createElement("a");
        lLink.className = "lesson-link";
        lLink.innerHTML = lesson.name;
        lLink.addEventListener("click", () => showLesson(lesson.id, lesson.name, lesson.content, lLink));
        accBody.appendChild(lLink);
    });

    // Sự kiện đóng/mở Accordion (Đóng chủ đề hiện tại khi mở chủ đề khác)
    accHeader.addEventListener("click", () => {
        document.querySelectorAll(".acc-body").forEach(body => {
            if (body !== accBody) body.classList.remove("open");
        });
        document.querySelectorAll(".acc-header").forEach(btn => {
            if (btn !== accHeader) btn.classList.remove("active");
        });
        accBody.classList.toggle("open");
        accHeader.classList.toggle("active");
    });

    accItem.appendChild(accHeader);
    accItem.appendChild(accBody);
    courseAccordion.appendChild(accItem);
});

// Hàm hiển thị nội dung bài học ra Trang con 2
function showLesson(id, name, content, activeElement) {
    // Highlighting current lesson
    document.querySelectorAll(".lesson-link").forEach(link => link.classList.remove("active"));
    activeElement.classList.add("active");

    // Dựng nội dung trang hiển thị
    let htmlContent = `
        <div class="lesson-content">
            <h2>${name}</h2>
            ${content}
        </div>
        <div class="lesson-img-container">
            <!-- Hiển thị ảnh lythuyet/x.png với tỉ lệ 16:9 -->
            <img src="lythuyet/${id}.png" alt="Ảnh minh họa ${id}" class="lesson-img">
            <br>
            <!-- Nút bấm mở link thực hành thuchanh/x.html -->
            <a href="thuchanh/${id}.html" target="_blank" class="btn-practice">Thực Hành Mô Phỏng Tại Đây</a>
        </div>
    `;
    lessonView.innerHTML = htmlContent;
    // Cuộn lên đầu bài học cho thiết bị di động
    if (window.innerWidth <= 768) {
        lessonView.scrollIntoView({ behavior: 'smooth' });
    }
}
