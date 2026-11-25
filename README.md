[![make.fun · u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![make.fun rank](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/turibaru/worst-fix-ever/rank.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/leaderboard)
[![make.fun reward](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/turibaru/worst-fix-ever/reward.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)

# Worst Fix Ever: Funniest Commit Message

Our entry for the make.fun bounty "Worst Fix Ever: Funniest Commit Message" is a single-line commit message about a fix that backfired in the most expensive way possible:

> fix: auto-retry failed payments once more — charged the customer twice, politely, forever

The idea is simple and painfully familiar to anyone who has ever shipped a retry loop: a failed payment gets one more automatic retry, meant as a harmless safety net — only the retry does not stop at once. The customer is charged twice, and the system keeps doing it with perfect manners, forever, as if double-billing on a loop were the polite thing to do. The fix did not fix anything — it turned one failed charge into an endless, courteous overcharge. The retry was supposed to save the payment; instead it became the bug that never stops apologizing while it keeps charging.

`main.ts` reads `entry.txt` at runtime and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt`, refusing (exit 1) if the entry is longer than 100 characters.
