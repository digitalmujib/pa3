import React from 'react'
import {Link} from "react-router-dom"

const Events = () => {
  return (
    <div className='classList-container'>

      <div className='btn-container'>
        <button className='add'>✔ Create New Event</button>
        {/* <button className='remove'><img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik03NC41MzMzMywxNy4yYy0xLjUzNDA2LC0wLjAyMDgyIC0zLjAxMjQ5LDAuNTc0IC00LjEwNDY4LDEuNjUxNDZjLTEuMDkyMTksMS4wNzc0NiAtMS43MDcwMywyLjU0NzY3IC0xLjcwNzA0LDQuMDgxODdoLTM0LjMyMTYxYy0yLjA2NzY1LC0wLjAyOTI0IC0zLjk5MDg3LDEuMDU3MDkgLTUuMDMzMjIsMi44NDNjLTEuMDQyMzYsMS43ODU5MiAtMS4wNDIzNiwzLjk5NDc0IDAsNS43ODA2NmMxLjA0MjM2LDEuNzg1OTIgMi45NjU1OCwyLjg3MjI1IDUuMDMzMjIsMi44NDNoMTAzLjJjMi4wNjc2NSwwLjAyOTI0IDMuOTkwODcsLTEuMDU3MDkgNS4wMzMyMiwtMi44NDNjMS4wNDIzNiwtMS43ODU5MiAxLjA0MjM2LC0zLjk5NDc0IDAsLTUuNzgwNjZjLTEuMDQyMzYsLTEuNzg1OTIgLTIuOTY1NTgsLTIuODcyMjUgLTUuMDMzMjIsLTIuODQzaC0zNC4zMjE2MWMtMC4wMDAwMSwtMS41MzQyMSAtMC42MTQ4NiwtMy4wMDQ0MiAtMS43MDcwNCwtNC4wODE4N2MtMS4wOTIxOSwtMS4wNzc0NiAtMi41NzA2MSwtMS42NzIyOCAtNC4xMDQ2OCwtMS42NTE0NnpNMzQuNCw0NS44NjY2N3Y5MS43MzMzM2MwLDYuMzM1MzMgNS4xMzEzMywxMS40NjY2NyAxMS40NjY2NywxMS40NjY2N2g4MC4yNjY2N2M2LjMzNTMzLDAgMTEuNDY2NjcsLTUuMTMxMzMgMTEuNDY2NjcsLTExLjQ2NjY3di05MS43MzMzM3pNNjguOCw3NC41MzMzM2MxLjQ2NjMsMCAyLjkzMjc4LDAuNTU4ODIgNC4wNTM2NCwxLjY3OTY5bDEzLjE0NjM2LDEzLjE0NjM2bDEzLjE0NjM2LC0xMy4xNDYzNmMyLjI0MTczLC0yLjI0MTczIDUuODY1NTYsLTIuMjQxNzMgOC4xMDcyOSwwYzIuMjQxNzMsMi4yNDE3MyAyLjI0MTczLDUuODY1NTYgMCw4LjEwNzI5bC0xMy4xNDYzNiwxMy4xNDYzNmwxMy4xNDYzNiwxMy4xNDYzNmMyLjI0MTczLDIuMjQxNzMgMi4yNDE3Myw1Ljg2NTU2IDAsOC4xMDcyOWMtMS4xMTgsMS4xMTggLTIuNTg1OTEsMS42Nzk2OSAtNC4wNTM2NCwxLjY3OTY5Yy0xLjQ2NzczLDAgLTIuOTM1NjQsLTAuNTYxNjkgLTQuMDUzNjQsLTEuNjc5NjlsLTEzLjE0NjM2LC0xMy4xNDYzNmwtMTMuMTQ2MzYsMTMuMTQ2MzZjLTEuMTE4LDEuMTE4IC0yLjU4NTkxLDEuNjc5NjkgLTQuMDUzNjQsMS42Nzk2OWMtMS40Njc3MywwIC0yLjkzNTY0LC0wLjU2MTY5IC00LjA1MzY0LC0xLjY3OTY5Yy0yLjI0MTczLC0yLjI0MTczIC0yLjI0MTczLC01Ljg2NTU2IDAsLTguMTA3MjlsMTMuMTQ2MzYsLTEzLjE0NjM2bC0xMy4xNDYzNiwtMTMuMTQ2MzZjLTIuMjQxNzMsLTIuMjQxNzMgLTIuMjQxNzMsLTUuODY1NTYgMCwtOC4xMDcyOWMxLjEyMDg3LC0xLjEyMDg3IDIuNTg3MzQsLTEuNjc5NjkgNC4wNTM2NCwtMS42Nzk2OXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==" alt="" /> Delete Event</button> */}
        {/* <button className='change'><img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnPjxwYXRoIGQ9Ik01Ni44MjAyLDE2Ny43di00MC44NWwyOS4xNzk4LDIwLjQyNXoiIGZpbGw9IiMzNjQwNGQiPjwvcGF0aD48cGF0aCBkPSJNMTUuOTcwMiwxMTguMDk1MmMwLC01LjcxNDcgNC45MTkyLC0xMC45ODIyIDEzLjE3OTUsLTE1LjI5NTFjMC43MDUyLC0yLjg0NjYgMS42MDM5LC01LjUyNTUgMi43MzQ4LC03Ljk3MjJjLTE2Ljg4MTgsNi40MTk5IC0yNy41ODQ1LDE1Ljc1NTIgLTI3LjU4NDUsMjYuMTg3YzAsMTYuNzYxNCAyNy40OTQyLDMwLjc0OTMgNjQuMTk0NywzNC4xODkzdi0xMS43MDQ2Yy0zMC4xOTAzLC0yLjkyNCAtNTIuNTI0NSwtMTMuMTcwOSAtNTIuNTI0NSwtMjUuNDA0NHpNMTQwLjA4NTQsOTQuODE5M2MxLjEzOTUsMi40NDY3IDIuMDQ2OCw1LjEyOTkgMi43NTYzLDcuOTc2NWM4LjI2NDYsNC4zMTI5IDEzLjE4ODEsOS41ODQ3IDEzLjE4ODEsMTUuMjk5NGMwLDEzLjAwNzUgLTI1LjI0OTYsMjMuNzc5IC01OC4zNTUzLDI1Ljg2ODh2MTEuNjY1OWMzOS41NzI5LC0yLjQzMzggNzAuMDI1NSwtMTYuOTgwNyA3MC4wMjU1LC0zNC42MTVjMCwtMTAuNDM2MSAtMTAuNzE1NiwtMTkuNzggLTI3LjYxNDYsLTI2LjE5NTZ6IiBmaWxsPSIjMzY0MDRkIj48L3BhdGg+PHBhdGggZD0iTTQwLjkyMzEsMTEzLjk1YzEuMTA5NCwtMTYuNzgyOSAxNS4xMTg4LC0zMC4xIDMyLjE3NjksLTMwLjFoMjUuOGMxNy4wNjI0LDAgMzEuMDcxOCwxMy4zMTcxIDMyLjE3NjksMzAuMXoiIGZpbGw9IiM4YmI3ZjAiPjwvcGF0aD48cGF0aCBkPSJNOTguOSw4NmMxNS4xMzYsMCAyNy43MDA2LDExLjIzMTYgMjkuNzk0NywyNS44aC04NS4zODk0YzIuMDk0MSwtMTQuNTY4NCAxNC42NTQ0LC0yNS44IDI5Ljc5NDcsLTI1LjhoMjUuOE05OC45LDgxLjdoLTI1LjhjLTE4Ljk5NzQsMCAtMzQuNCwxNS40MDI2IC0zNC40LDM0LjRoOTQuNmMwLC0xOC45OTc0IC0xNS40MDI2LC0zNC40IC0zNC40LC0zNC40eiIgZmlsbD0iIzRlN2FiNSI+PC9wYXRoPjxwYXRoIGQ9Ik04Niw5My41MDM1Yy0xMS40NzI0LDAgLTE0LjUzODMsLTYuMjg2NiAtMTUuMDUsLTcuNTg5NXYtMTQuOTY0aDMwLjF2MTQuOTY0Yy0wLjUxNiwxLjMyNDQgLTMuNTgxOSw3LjU4OTUgLTE1LjA1LDcuNTg5NXoiIGZpbGw9IiNkZWI5NzQiPjwvcGF0aD48cGF0aCBkPSJNOTguOSw3My4xdjEyLjM1MzljLTAuNzE4MSwxLjQ2MiAtMy42NjM2LDUuOTAzOSAtMTIuOSw1LjkwMzljLTkuMzEzOCwwIC0xMi4yMjkyLC00LjUxMDcgLTEyLjksLTUuODgyNHYtMTIuMzc1NGgyNS44TTEwMy4yLDY4LjhoLTM0LjR2MTcuNDc1MmMwLDAgMi43MDA0LDkuMzc4MyAxNy4yLDkuMzc4M2MxNC40OTk2LDAgMTcuMiwtOS4zNzgzIDE3LjIsLTkuMzc4M3YtMTcuNDc1MnoiIGZpbGw9IiM5NjdhNDQiPjwvcGF0aD48Zz48cGF0aCBkPSJNMTA3LjUsNTguMDVjLTMuNTU2MSwwIC02LjQ1LC0yLjg5MzkgLTYuNDUsLTYuNDVjMCwtMy41NTYxIDIuODkzOSwtNi40NSA2LjQ1LC02LjQ1YzUuOTU5OCwwIDYuNDUsMS42OTQyIDYuNDUsMy41ODE5YzAsMy44OTU4IC0zLjI1MDgsOS4zMTgxIC02LjQ1LDkuMzE4MXpNNjQuNSw1OC4wNWMtMy4xOTkyLDAgLTYuNDUsLTUuNDIyMyAtNi40NSwtOS4zMTgxYzAsLTEuODg3NyAwLjQ5MDIsLTMuNTgxOSA2LjQ1LC0zLjU4MTljMy41NTYxLDAgNi40NSwyLjg5MzkgNi40NSw2LjQ1YzAsMy41NTYxIC0yLjg5MzksNi40NSAtNi40NSw2LjQ1eiIgZmlsbD0iI2RlYjk3NCI+PC9wYXRoPjxwYXRoIGQ9Ik0xMDcuNSw0Ny4zYzMuNTQ3NSwwIDQuMTg4MiwwLjY2NjUgNC4xOTI1LDAuNjcwOGMwLjAyNTgsMC4wNDMgMC4xMDc1LDAuMjc5NSAwLjEwNzUsMC43NjExYzAsMy4wOTYgLTIuNzA0Nyw3LjE2ODEgLTQuMyw3LjE2ODFjLTIuMzY5MywwIC00LjMsLTEuOTMwNyAtNC4zLC00LjNjMCwtMi4zNjkzIDEuOTMwNywtNC4zIDQuMywtNC4zTTY0LjUsNDcuM2MyLjM2OTMsMCA0LjMsMS45MzA3IDQuMyw0LjNjMCwyLjM2OTMgLTEuOTMwNyw0LjMgLTQuMyw0LjNjLTEuNTk1MywwIC00LjMsLTQuMDcyMSAtNC4zLC03LjE2ODFjMCwtMC40ODE2IDAuMDgxNywtMC43MTgxIDAuMTAzMiwtMC43NTY4YzAuMDA4NiwtMC4wMDg2IDAuNjQ5MywtMC42NzUxIDQuMTk2OCwtMC42NzUxTTEwNy41LDQzYy00Ljc1MTUsMCAtOC42LDMuODQ4NSAtOC42LDguNmMwLDQuNzUxNSAzLjg0ODUsOC42IDguNiw4LjZjNC43NTE1LDAgOC42LC02LjcxNjYgOC42LC0xMS40NjgxYzAsLTQuNzUxNSAtMy44NDg1LC01LjczMTkgLTguNiwtNS43MzE5ek02NC41LDQzYy00Ljc1MTUsMCAtOC42LDAuOTg0NyAtOC42LDUuNzMxOWMwLDQuNzQ3MiAzLjg0ODUsMTEuNDY4MSA4LjYsMTEuNDY4MWM0Ljc1MTUsMCA4LjYsLTMuODQ4NSA4LjYsLTguNmMwLC00Ljc1MTUgLTMuODQ4NSwtOC42IC04LjYsLTguNnoiIGZpbGw9IiM5NjdhNDQiPjwvcGF0aD48L2c+PGc+PHBhdGggZD0iTTg2LDc5LjU1Yy0xLjcxNTcsMCAtMy4zNTQsLTAuNzgyNiAtNC40ODkyLC0yLjE0MTRsLTAuNDUxNSwtMC41NDE4bC0wLjY4MzcsLTAuMTY3N2MtMTAuNjEyNCwtMi41OTcyIC0xOC4wMjEzLC0xMi4wNCAtMTguMDIxMywtMjIuOTQ5MXYtMjIuNjA1MWMwLC01LjU5NDMgNC41NTM3LC0xMC4xNDM3IDEwLjE0MzcsLTEwLjE0MzdoMjcuMDA4M2M1LjU5NDMsMCAxMC4xNDM3LDQuNTUzNyAxMC4xNDM3LDEwLjE0Mzd2MjIuNjA1MWMwLDEwLjkwOTEgLTcuNDEzMiwyMC4zNDc2IC0xOC4wMjEzLDIyLjk0OTFsLTAuNjgzNywwLjE2NzdsLTAuNDUxNSwwLjU0MThjLTEuMTM5NSwxLjM1ODggLTIuNzc3OCwyLjE0MTQgLTQuNDkzNSwyLjE0MTR6IiBmaWxsPSIjZjVjZTg1Ij48L3BhdGg+PHBhdGggZD0iTTk5LjUwNjMsMjMuMTUxMmM0LjQwNzUsMCA3Ljk5MzcsMy41ODYyIDcuOTkzNyw3Ljk5OHYyMi42MDA4YzAsOS45MjAxIC02LjczODEsMTguNDk4NiAtMTYuMzgzLDIwLjg1NWwtMS4zNzYsMC4zMzU0bC0wLjkwNzMsMS4wODc5Yy0wLjQyMTQsMC41MTYgLTEuMzU4OCwxLjM3MTcgLTIuODMzNywxLjM3MTdjLTEuNDc0OSwwIC0yLjQxMjMsLTAuODU1NyAtMi44MzgsLTEuMzY3NGwtMC45MDczLC0xLjA4NzlsLTEuMzc2LC0wLjMzNTRjLTkuNjQwNiwtMi4zNjA3IC0xNi4zNzg3LC0xMC45MzkyIC0xNi4zNzg3LC0yMC44NTkzdi0yMi42MDUxYzAsLTQuNDA3NSAzLjU4NjIsLTcuOTk4IDcuOTkzNywtNy45OThoMjcuMDEyNk05OS41MDYzLDE4Ljg1MTJoLTI3LjAwODNjLTYuNzk0LDAgLTEyLjI5OCw1LjUwNCAtMTIuMjk4LDEyLjI5Mzd2MjIuNjA1MWMwLDEyLjEzMDMgOC4zODA3LDIyLjI3NCAxOS42NTk2LDI1LjAzNDZjMS40NzA2LDEuNzY3MyAzLjY1OTMsMi45MTU0IDYuMTQwNCwyLjkxNTRjMi40ODExLDAgNC42Njk4LC0xLjE0ODEgNi4xNDA0LC0yLjkxNTRjMTEuMjc4OSwtMi43NjA2IDE5LjY1OTYsLTEyLjkwNDMgMTkuNjU5NiwtMjUuMDM0NnYtMjIuNjA1MWMwLC02Ljc4OTcgLTUuNTA0LC0xMi4yOTM3IC0xMi4yOTM3LC0xMi4yOTM3eiIgZmlsbD0iIzk2N2E0NCI+PC9wYXRoPjwvZz48Zz48cGF0aCBkPSJNMTA5LjY1LDUzLjc1di02LjQ1YzAsLTExLjYxODYgLTkuNDEyNywtMTcuODI3OCAtOS44MTY5LC0xOC4wODE1bC0xLjQyMzMsLTAuOTIwMmwtMS4yMjU1LDEuMTY5NmMtMC4wNTU5LDAuMDUxNiAtNi40OTczLDUuOTI1NCAtMjAuMDUwOSw1LjkyNTRjLTcuMzU3MywwIC0xNC43NzkxLDQuNDA3NSAtMTQuNzc5MSwxNC4yNTg4djQuMDk3OWgtMC41MDc0Yy0xLjA3NSwtNC4wMzM0IC0zLjc5NjksLTE1LjEzNiAtMy43OTY5LC0yMy42NWMwLC0xMS43NTE5IDkuMTE2LC0yMy42NSAyNi41NDM5LC0yMy42NWMxMS45MjM5LDAgMTQuOTM4Miw3LjE3NjcgMTQuOTY0LDcuMjQ5OGwwLjUzNzUsMS4zNTAyaDEuNDU3N2M2LjE2MTksMCAxMi4zOTY5LDUuMjcxOCAxMi4zOTY5LDE1LjM0MjRjMCw3Ljc4MyAtMi43NDM0LDE5LjIwODEgLTMuODA1NSwyMy4zNTc2eiIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Ik04NC41OTM5LDguNmMxMC4xOTUzLDAgMTIuODkxNCw1LjczMTkgMTIuOTY4OCw1Ljg5OTZsMS4wODM2LDIuNzAwNGgyLjkxMTFjNS4wODY5LDAgMTAuMjQyNiw0LjUzMjIgMTAuMjQyNiwxMy4xOTI0YzAsMy4wMjI5IC0wLjQzNDMsNi42MzkyIC0xLjAxOTEsMTAuMTQ4Yy0yLjYyMywtOC40MjM3IC05LjQyNTYsLTEyLjkwNDMgLTkuNzc4MiwtMTMuMTMyMmwtMi44MjA4LC0xLjc1ODdsLTIuNDQ2NywyLjIzMTdjLTAuMjQwOCwwLjIxOTMgLTYuMDI4Niw1LjM2NjQgLTE4LjYwMTgsNS4zNjY0Yy03LjM1NzMsMCAtMTMuMDc2MywzLjY3MjIgLTE1LjU2Niw5LjQ4MTVjLTAuNzU2OCwtNC4xMDY1IC0xLjM2NzQsLTguNjY0NSAtMS4zNjc0LC0xMi42MjkxYzAsLTEwLjY4NTUgOC4zODA3LC0yMS41IDI0LjM5MzksLTIxLjVNODQuNTkzOSw0LjNjLTE4LjEzNzQsMCAtMjguNjkzOSwxMi4zNDk2IC0yOC42OTM5LDI1LjhjMCwxMC45ODY1IDQuMywyNS44IDQuMywyNS44aDQuM2MwLDAgMCwtMy4yMjUgMCwtNi4yNDc5YzAsLTguMzAzMyA2LjAxNTcsLTEyLjEwODggMTIuNjI5MSwtMTIuMTA4OGMxNC43MTg5LDAgMjEuNTM4NywtNi41MjMxIDIxLjUzODcsLTYuNTIzMWMwLDAgOC44MzIyLDUuNjk3NSA4LjgzMjIsMTYuMjc5OGMwLDMuMzIzOSAwLDguNiAwLDguNmg0LjNjMCwwIDQuMywtMTUuNDkyOSA0LjMsLTI1LjUwNzZjMCwtMTEuNDEyMiAtNy4yOTcxLC0xNy40OTI0IC0xNC41NDY5LC0xNy40OTI0YzAsMCAtMy40NCwtOC42IC0xNi45NTkyLC04LjZ6IiBmaWxsPSIjNjY2NjY2Ij48L3BhdGg+PC9nPjwvZz48L2c+PC9zdmc+" alt="" /> Reschedule</button> */}
      </div>

      <div className='classList'>
        <div className='headings'>
          <h2>Event Name</h2>
          <h2>Date</h2>
          <h2>Timings</h2>
          <h2>Coodinators</h2>
        </div>

        <div className='data first'>
          <p>techfest 2.0</p>
          <p>25th Aug 2022</p>
          <p>2pm - 4pm</p>
          <p><Link>View</Link></p>
        </div>

        <div className='data'>
          <p>SU200216</p>
          <p>Shaikh Mohinodin Mujib</p>
          <p>sha035@chowgules.ac.in</p>
          <p>45</p>
        </div>

      </div >
    </div>
  )
}

export default Events