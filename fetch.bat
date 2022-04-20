@echo off
@rem anken名(="???? *"に一致するフォルダ名)の一覧をファイルに書き込む
@set filename=$ask_src\ankens.js
@echo const ankens = [> %filename%
@for /d %%a in ("???? *") do echo     "%%a",>> %filename%
@echo ]>> %filename%
@echo on
