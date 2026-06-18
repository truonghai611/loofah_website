

### Trước khi bắt đầu công việc
* Kiểm tra trạng thái git:
```sh
git status
```

Đảm bảo "nothing to commit, working tree clean" ở local repository


* Cập nhật git mới nhất:
```sh
git pull --rebase
```

Đảm bảo code được cập nhật mới nhất ở remote repository, nếu code hiện tại có commit và chưa push, và remote có commit mới, lệnh `--rebase` sẽ đảm bảo code ở local được cập nhật sau code ở remote

* Push code sẵn có:
```sh
git push
```

Đảm bảo đã đẩy code mới nhất ở local repository lên github.


### Conflict và Resolve
#### 1. Conflict khi pull:
Khi pull code, đôi khi 2 người cùng thay đổi 1 file sẽ làm file đó bị conflict, và cần quyết định resolve thủ công để cập nhật lại. Lúc này code sẽ ở trạng thái `rebase` và hiển thị các file bị thay đổi.
Dùng visual studio code để resolve conflict bằng cách chọn/sửa các khối thay đổi từ 2 phía.

Sau khi xong, gõ lệnh sau để ghi nhận thay đổi:
```sh
git rebase --continue
```

Việc resolve có thể diễn ra nhiều lần, dựa vào số lượng commit.

#### 2. Conflict khi push:
Khi có người push code lên github trước bạn, bạn cần pull code về để đảm bảo code được resolve tốt trước khi push.
Dùng lệnh `pull` với flag `--rebase` như hướng dẫn trên. Sau khi git local đã clean, có thể dùng lệnh `push`.